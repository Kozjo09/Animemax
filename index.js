/**
 * AnimeMax Cloud Engine - Mei 2026
 * Dit bestand vervangt index.html om de database aan te sturen.
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // --- CLOUD DATABASE LOGICA ---
    if (url.pathname === "/api/sync" && request.method === "POST") {
      try {
        const { user, pass, action, data } = await request.json();
        const storage = env.ANIMEMAX_DB || env.KV || null;
        
        if (!storage) {
          return new Response(JSON.stringify({ error: "Database niet gekoppeld in Cloudflare dashboard." }), { status: 500 });
        }

        const key = `user:${user.toLowerCase()}`;
        const stored = await storage.get(key);
        const account = stored ? JSON.parse(stored) : null;

        if (action === "register") {
          if (account) return new Response(JSON.stringify({ error: "Gebruiker bestaat al" }), { status: 400 });
          await storage.put(key, JSON.stringify({ pass: btoa(pass), data: { list: [] } }));
          return new Response(JSON.stringify({ ok: true }));
        }

        if (!account || account.pass !== btoa(pass)) {
          return new Response(JSON.stringify({ error: "Inloggegevens onjuist" }), { status: 401 });
        }

        if (action === "save") {
          account.data = data;
          await storage.put(key, JSON.stringify(account));
          return new Response(JSON.stringify({ ok: true }));
        }

        return new Response(JSON.stringify({ ok: true, data: account.data }));
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
      }
    }

    // --- DE WEBSITE INTERFACE (HTML) ---
    const html = `
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>AnimeMax Cloud</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;900&display=swap');
        body { background: #050505; color: #fff; font-family: 'Outfit', sans-serif; overflow: hidden; }
        .accent { color: #cae962; }
        .bg-accent { background: #cae962; color: #000; }
        .glass { background: rgba(20,20,20,0.7); backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.08); }
        input { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: white !important; }
        ::-webkit-scrollbar { display: none; }
    </style>
</head>
<body class="p-6 flex flex-col min-h-screen">

    <!-- Cloud Status Indicator -->
    <div class="fixed top-6 right-6 flex items-center gap-2 bg-black/40 p-2 px-3 rounded-full border border-white/5 z-50">
        <div id="dot" class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
        <span id="stat-text" class="text-[8px] font-black uppercase tracking-widest text-zinc-400">Verbinden...</span>
    </div>

    <!-- Login Scherm -->
    <div id="login-view" class="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full space-y-10">
        <div class="text-center">
            <h1 class="text-5xl font-black italic tracking-tighter mb-2">ANIME<span class="accent">MAX</span></h1>
            <p class="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">Online Database</p>
        </div>

        <div class="space-y-4">
            <input type="text" id="u" placeholder="GEBRUIKERSNAAM" class="w-full p-5 rounded-2xl outline-none focus:border-accent text-xs font-bold transition-all">
            <input type="password" id="p" placeholder="WACHTWOORD" class="w-full p-5 rounded-2xl outline-none focus:border-accent text-xs font-bold transition-all">
            
            <div class="grid grid-cols-2 gap-4 pt-4">
                <button onclick="auth('login')" class="bg-accent font-black py-5 rounded-2xl text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-accent/10">Inloggen</button>
                <button onclick="auth('register')" class="bg-zinc-900 font-black py-5 rounded-2xl text-[10px] uppercase tracking-widest border border-white/5 hover:bg-zinc-800 transition-all">Nieuw Account</button>
            </div>
        </div>
    </div>

    <!-- App Scherm -->
    <div id="app-view" class="hidden flex-1 flex flex-col max-w-2xl mx-auto w-full pt-10">
        <header class="flex justify-between items-center mb-10">
            <div>
                <p class="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Ingelogd als:</p>
                <h2 id="user-tag" class="text-2xl font-black accent italic uppercase">User</h2>
            </div>
            <button onclick="location.reload()" class="w-12 h-12 rounded-2xl glass flex items-center justify-center text-red-500"><i class="fa-solid fa-power-off"></i></button>
        </header>

        <div class="glass p-8 rounded-[3rem] flex-1 flex flex-col shadow-2xl">
            <div class="flex justify-between items-center mb-8">
                <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Cloud Watchlist</h3>
                <span id="counter" class="bg-accent/10 text-accent px-3 py-1 rounded-full text-[9px] font-black">0 ITEMS</span>
            </div>

            <div id="list" class="space-y-4 flex-1 overflow-y-auto pr-2">
                <!-- Dynamische Lijst -->
            </div>

            <button onclick="add()" class="w-full mt-8 p-6 rounded-3xl border-2 border-dashed border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:border-accent hover:text-accent transition-all active:scale-95">
                <i class="fa-solid fa-plus mr-2"></i> Anime Toevoegen
            </button>
        </div>
    </div>

    <script>
        let state = { u: '', p: '', items: [] };

        async function updateStatus() {
            // Check simpel of de worker live is
            document.getElementById('dot').className = 'w-2 h-2 rounded-full bg-green-500';
            document.getElementById('stat-text').innerText = 'Cloud Actief';
        }

        async function auth(action) {
            const u = document.getElementById('u').value.trim();
            const p = document.getElementById('p').value.trim();
            if(!u || !p) return;

            const res = await fetch('/api/sync', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user: u, pass: p, action })
            });
            const data = await res.json();

            if (res.ok) {
                state.u = u; state.p = p;
                state.items = data.data ? data.data.list : [];
                document.getElementById('login-view').classList.add('hidden');
                document.getElementById('app-view').classList.remove('hidden');
                document.getElementById('user-tag').innerText = u;
                render();
            } else {
                alert(data.error);
            }
        }

        async function save() {
            await fetch('/api/sync', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    user: state.u, pass: state.p, 
                    action: 'save', data: { list: state.items } 
                })
            });
        }

        function render() {
            const container = document.getElementById('list');
            document.getElementById('counter').innerText = \`\${state.items.length} ITEMS\`;
            
            if (state.items.length === 0) {
                container.innerHTML = '<div class="h-40 flex items-center justify-center opacity-20 text-[10px] font-black uppercase tracking-widest text-center">Je cloud-lijst is nog leeg</div>';
                return;
            }

            container.innerHTML = '';
            state.items.forEach((item, i) => {
                container.innerHTML += \`
                    <div class="flex justify-between items-center p-5 bg-white/5 rounded-3xl border border-white/5 group hover:border-accent/30 transition-all">
                        <div class="flex items-center gap-4">
                            <div class="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(202,233,98,0.5)]"></div>
                            <span class="font-black text-sm uppercase italic tracking-tight">\${item}</span>
                        </div>
                        <button onclick="remove(\${i})" class="text-zinc-700 hover:text-red-500 transition-colors p-2"><i class="fa-solid fa-trash-can text-xs"></i></button>
                    </div>
                \`;
            });
        }

        function add() {
            const val = prompt("Naam van de anime:");
            if (val && val.trim() !== "") {
                state.items.unshift(val.trim());
                render();
                save();
            }
        }

        function remove(i) {
            state.items.splice(i, 1);
            render();
            save();
        }

        updateStatus();
    </script>
</body>
</html>
    `;

    return new Response(html, { headers: { "content-type": "text/html;charset=UTF-8" } });
  }
}

