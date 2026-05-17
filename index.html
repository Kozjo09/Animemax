<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>AnimeMax Pro - Cloud Edition</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap');
        body { background: #080808; color: white; font-family: 'Outfit', sans-serif; overflow-x: hidden; -webkit-tap-highlight-color: transparent; }
        .accent { color: #cae962; }
        .bg-accent { background: #cae962; }
        .glass { background: rgba(15, 15, 15, 0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255,255,255,0.05); }
        .card { background: #121212; border-radius: 18px; border: 1px solid rgba(255,255,255,0.03); transition: 0.2s; }
        .card:active { transform: scale(0.97); border-color: #cae962; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        iframe { width: 100%; height: 100%; border: none; }
        
        /* Toggle Switch CSS */
        .toggle-checkbox:checked + .toggle-bg { background-color: #cae962; }
        .toggle-checkbox:checked + .toggle-bg .toggle-dot { transform: translateX(100%); background-color: #000; }
        
        /* Animatie Toasts */
        @keyframes slideIn {
            from { transform: translate(-50%, 100%); opacity: 0; }
            to { transform: translate(-50%, 0); opacity: 1; }
        }
        .animate-toast {
            animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
    </style>
</head>
<body class="pb-32">

    <!-- Custom Toast Notification Container -->
    <div id="toast-container" class="fixed bottom-28 left-1/2 -translate-x-1/2 z-[9999] pointer-events-none w-[90%] max-w-xs"></div>

    <!-- Custom Confirm Modal -->
    <div id="confirm-modal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000] hidden items-center justify-center p-4">
        <div class="bg-[#121212] border border-white/5 p-6 rounded-2xl max-w-sm w-full shadow-2xl">
            <h3 id="confirm-title" class="text-lg font-black uppercase tracking-wider mb-2">Bevestigen</h3>
            <p id="confirm-message" class="text-zinc-400 text-xs leading-relaxed mb-6"></p>
            <div class="flex gap-3">
                <button id="confirm-cancel-btn" class="flex-1 bg-zinc-900 border border-white/5 py-3 rounded-xl text-xs font-black uppercase">Annuleren</button>
                <button id="confirm-ok-btn" class="flex-1 bg-red-500 text-white py-3 rounded-xl text-xs font-black uppercase">Bevestigen</button>
            </div>
        </div>
    </div>

    <!-- Header (Alleen zichtbaar als de gebruiker is ingelogd) -->
    <header id="app-header" class="sticky top-0 z-50 glass p-4 hidden">
        <div class="flex items-center justify-between max-w-4xl mx-auto mb-4">
            <button onclick="nav('home')" class="text-2xl font-black italic uppercase tracking-tighter">ANIME<span class="accent">MAX</span></button>
            <div class="flex gap-3 items-center">
                <button onclick="nav('search')" class="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center border border-white/5"><i class="fa-solid fa-search text-xs"></i></button>
                <button onclick="nav('profile')" id="prof-btn" class="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center border border-white/10 text-zinc-600">
                    <i class="fa-solid fa-user-astronaut"></i>
                </button>
                <button onclick="logout()" class="w-10 h-10 rounded-full bg-red-950/40 hover:bg-red-900 border border-red-900/30 flex items-center justify-center text-red-400 transition-colors" title="Uitloggen"><i class="fa-solid fa-sign-out-alt text-xs"></i></button>
            </div>
        </div>
    </header>

    <!-- Hoofdinhoud -->
    <main id="content" class="p-4 max-w-4xl mx-auto min-h-[60vh]">
        <!-- Inhoud wordt hier geladen via JavaScript -->
    </main>

    <!-- Navigatiebalk onderaan (Alleen zichtbaar als de gebruiker is ingelogd) -->
    <nav id="app-navigation" class="fixed bottom-6 left-1/2 -translate-x-1/2 w-[94%] max-w-sm glass rounded-[2.5rem] p-2 flex justify-around items-center shadow-2xl z-[100] border border-white/10 hidden">
        <button onclick="nav('home')" class="p-4 nav-link" id="nav-home"><i class="fa-solid fa-house"></i></button>
        <button onclick="nav('cloud')" class="p-4 nav-link" id="nav-cloud"><i class="fa-solid fa-cloud"></i></button>
        <button onclick="nav('library')" class="p-4 nav-link" id="nav-library"><i class="fa-solid fa-layer-group"></i></button>
        <button onclick="nav('profile')" class="p-4 nav-link" id="nav-profile"><i class="fa-solid fa-user-ninja"></i></button>
    </nav>

    <!-- Firebase SDK Modules -->
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
        import { getFirestore, doc, setDoc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

        // Firebase-configuratie (De omgevingsvariabelen worden runtime ingeladen)
        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {
            apiKey: "",
            authDomain: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: ""
        };

        const fApp = initializeApp(firebaseConfig);
        const auth = getAuth(fApp);
        const db = getFirestore(fApp);
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

        const API = 'https://graphql.anilist.co';

        // Globale App-toestand gekoppeld aan het window-object
        window.app = {
            view: 'home',
            id: null,
            ep: 1,
            mode: 'sub',
            searchQuery: '',
            cloudFilter: 'All',
            libraryFilter: 'All',
            
            // Gebruikersgegevens (gesynchroniseerd met Firestore)
            user: 'Kozjo09',
            showContinue: true,
            lang: 'english',
            autoSelect: 'sub',
            autoPlay: true,
            autoNext: true,
            skipSeconds: 5,
            autoSkipIntro: false,
            recent: [],
            xmlLib: []
        };

        let activeFirebaseUser = null;

        // Custom Toast Notificatiesysteem
        window.showToast = function(message, type = 'success') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = `p-4 rounded-xl text-xs font-black uppercase tracking-wider mb-2 flex items-center justify-between shadow-2xl border text-center animate-toast pointer-events-auto ${
                type === 'error' ? 'bg-red-950/90 text-red-400 border-red-500/20' : 'bg-zinc-900/90 text-accent border-accent/20'
            }`;
            toast.innerHTML = `<span>${message}</span><button onclick="this.parentElement.remove()" class="ml-4 opacity-50 hover:opacity-100"><i class="fa-solid fa-times"></i></button>`;
            container.appendChild(toast);
            setTimeout(() => { if (toast.parentElement) toast.remove(); }, 4000);
        }

        // Custom Bevestigings-modal
        window.showConfirm = function(title, message, onConfirm) {
            const modal = document.getElementById('confirm-modal');
            const titleEl = document.getElementById('confirm-title');
            const messageEl = document.getElementById('confirm-message');
            const cancelBtn = document.getElementById('confirm-cancel-btn');
            const okBtn = document.getElementById('confirm-ok-btn');

            titleEl.textContent = title;
            messageEl.textContent = message;
            modal.classList.remove('hidden');
            modal.classList.add('flex');

            const close = () => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            };

            cancelBtn.onclick = () => { close(); };
            okBtn.onclick = () => {
                close();
                onConfirm();
            };
        }

        // --- AUTH & CLOUD DATABANK SYNC LOGICA ---

        // Firebase Auth State Listener
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                activeFirebaseUser = user;
                if (!user.isAnonymous) {
                    await loadCloudData();
                    document.getElementById('app-header').classList.remove('hidden');
                    document.getElementById('app-navigation').classList.remove('hidden');
                    window.nav('home');
                } else {
                    showLoginPage('login');
                }
            } else {
                activeFirebaseUser = null;
                try {
                    await signInAnonymously(auth);
                } catch (e) {
                    console.error("Anonieme inlog mislukt: ", e);
                }
                showLoginPage('login');
            }
        });

        // Laad cloud watchlist, geschiedenis en instellingen uit Firestore (Rule 1)
        async function loadCloudData() {
            if (!activeFirebaseUser || activeFirebaseUser.isAnonymous) return;
            try {
                const docRef = doc(db, 'artifacts', appId, 'users', activeFirebaseUser.uid, 'userdata');
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const cloudData = docSnap.data();
                    window.app.mode = cloudData.mode || 'sub';
                    window.app.user = cloudData.user || 'Kozjo09';
                    window.app.showContinue = cloudData.showContinue !== false;
                    window.app.lang = cloudData.lang || 'english';
                    window.app.autoSelect = cloudData.autoSelect || 'sub';
                    window.app.autoPlay = cloudData.autoPlay === true;
                    window.app.autoNext = cloudData.autoNext !== false;
                    window.app.skipSeconds = parseInt(cloudData.skipSeconds || '5');
                    window.app.autoSkipIntro = cloudData.autoSkipIntro === true;
                    window.app.recent = cloudData.recent || [];
                    window.app.xmlLib = cloudData.xmlLib || [];
                }
            } catch (e) {
                console.error("Fout bij laden van cloud-data: ", e);
                window.showToast("Laden van cloud-gegevens mislukt.", "error");
            }
        }

        // Sla alle data realtime op in Firestore (Rule 1)
        window.saveCloudData = async function() {
            if (!activeFirebaseUser || activeFirebaseUser.isAnonymous) return;
            try {
                const docRef = doc(db, 'artifacts', appId, 'users', activeFirebaseUser.uid, 'userdata');
                await setDoc(docRef, {
                    mode: window.app.mode,
                    user: window.app.user,
                    showContinue: window.app.showContinue,
                    lang: window.app.lang,
                    autoSelect: window.app.autoSelect,
                    autoPlay: window.app.autoPlay,
                    autoNext: window.app.autoNext,
                    skipSeconds: window.app.skipSeconds,
                    autoSkipIntro: window.app.autoSkipIntro,
                    recent: window.app.recent,
                    xmlLib: window.app.xmlLib
                });
            } catch (e) {
                console.error("Fout bij opslaan van cloud-data: ", e);
            }
        }

        // --- AUTH SYSTEM ACTIES ---
        window.handleRegister = async function() {
            const user = document.getElementById('reg-username').value.trim();
            const pass = document.getElementById('reg-password').value.trim();

            if (!user || !pass) {
                window.showToast("Vul alstublieft alle velden in.", "error");
                return;
            }

            const email = `${user.toLowerCase()}@animemax.local`;

            try {
                const credential = await createUserWithEmailAndPassword(auth, email, pass);
                const docRef = doc(db, 'artifacts', appId, 'users', credential.user.uid, 'userdata');
                await setDoc(docRef, {
                    mode: 'sub',
                    user: user,
                    showContinue: true,
                    lang: 'english',
                    autoSelect: 'sub',
                    autoPlay: true,
                    autoNext: true,
                    skipSeconds: 5,
                    autoSkipIntro: false,
                    recent: [],
                    xmlLib: []
                });
                window.showToast("Account succesvol geregistreerd!");
                showLoginPage('login');
            } catch (e) {
                console.error(e);
                window.showToast("Registratie mislukt. Kies een andere naam of sterker wachtwoord.", "error");
            }
        }

        window.handleLogin = async function() {
            const user = document.getElementById('login-username').value.trim();
            const pass = document.getElementById('login-password').value.trim();

            if (!user || !pass) {
                window.showToast("Vul alstublieft alle velden in.", "error");
                return;
            }

            const email = `${user.toLowerCase()}@animemax.local`;

            try {
                await signInWithEmailAndPassword(auth, email, pass);
                window.showToast("Succesvol ingelogd!");
            } catch (e) {
                console.error(e);
                window.showToast("Gebruikersnaam of wachtwoord is onjuist.", "error");
            }
        }

        window.logout = async function() {
            await window.saveCloudData();
            try {
                await signOut(auth);
                window.showToast("Succesvol uitgelogd.");
            } catch (e) {
                console.error("Uitloggen mislukt: ", e);
            }
        }

        window.deleteAccountCloud = async function() {
            window.showConfirm(
                "Profiel Wissen",
                "Weet je zeker dat je alle opgeslagen watchlists, geschiedenis en instellingen van dit account permanent wilt wissen uit de cloud? Dit kan niet ongedaan worden gemaakt.",
                async () => {
                    if (!activeFirebaseUser || activeFirebaseUser.isAnonymous) return;
                    try {
                        const docRef = doc(db, 'artifacts', appId, 'users', activeFirebaseUser.uid, 'userdata');
                        await deleteDoc(docRef);
                        window.showToast("Alle profieldata is succesvol gewist uit de cloud.");
                        window.logout();
                    } catch (e) {
                        console.error(e);
                        window.showToast("Fout bij het wissen van profieldata.", "error");
                    }
                }
            );
        }

        // --- GRAPHQL API QUERY HELPER ---
        async function gql(query, vars) {
            const headers = { 'Content-Type': 'application/json' };
            try {
                const r = await fetch(API, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({ query, variables: vars })
                });
                return await r.json();
            } catch(e) {
                console.error("GraphQL API Fout: ", e);
                return null;
            }
        }

        // --- INTERACTION LOGICA ---
        window.nav = function(view, params = {}) {
            if (!activeFirebaseUser || activeFirebaseUser.isAnonymous) {
                showLoginPage('login');
                return;
            }
            window.app.view = view;
            window.app.id = params.id || null;
            window.app.ep = params.ep || 1;
            render();
            window.scrollTo(0,0);
        }

        window.updateLocalItem = function(id, title, status, progress, totalEpisodes = 12) {
            let found = false;
            window.app.xmlLib = window.app.xmlLib.map(item => {
                if (item.id == id) {
                    found = true;
                    return { ...item, status, progress: parseInt(progress), episodes: totalEpisodes };
                }
                return item;
            });

            if (!found) {
                window.app.xmlLib.push({
                    id: id.toString(),
                    title: title,
                    status: status,
                    progress: parseInt(progress),
                    episodes: totalEpisodes
                });
            }

            window.saveCloudData();
            window.showToast("Cloud bibliotheek succesvol bijgewerkt!");
            render();
        }

        window.deleteLocalItem = function(id) {
            window.showConfirm(
                "Item Verwijderen",
                "Weet je zeker dat je deze anime uit je bibliotheek wilt verwijderen?",
                () => {
                    window.app.xmlLib = window.app.xmlLib.filter(item => item.id != id);
                    window.saveCloudData();
                    render();
                }
            );
        }

        function showLoginPage(mode = 'login') {
            document.getElementById('app-header').classList.add('hidden');
            document.getElementById('app-navigation').classList.add('hidden');
            
            const main = document.getElementById('content');
            
            if (mode === 'register') {
                main.innerHTML = `
                    <div class="max-w-md mx-auto mt-16 p-8 card border border-white/5 shadow-2xl">
                        <h2 class="text-3xl font-black italic accent uppercase tracking-tighter mb-2 text-center">ANIME<span class="text-white">MAX</span></h2>
                        <p class="text-[10px] text-zinc-500 uppercase tracking-widest text-center mb-8">Maak een nieuw cloud-profiel aan</p>
                        
                        <div class="space-y-4">
                            <div>
                                <label class="text-[10px] font-black uppercase text-zinc-400 block mb-1">Gebruikersnaam</label>
                                <input type="text" id="reg-username" class="w-full bg-black border border-white/10 p-4 rounded-xl outline-none font-bold text-sm focus:border-accent">
                            </div>
                            <div>
                                <label class="text-[10px] font-black uppercase text-zinc-400 block mb-1">Wachtwoord</label>
                                <input type="password" id="reg-password" class="w-full bg-black border border-white/10 p-4 rounded-xl outline-none font-bold text-sm focus:border-accent">
                            </div>
                            <button onclick="handleRegister()" class="bg-accent text-black font-black py-4 rounded-xl w-full text-[10px] uppercase tracking-widest mt-4">Account Aanmaken</button>
                            
                            <p class="text-center text-xs text-zinc-500 mt-4">
                                Heb je al een account? <button onclick="showLoginPage('login')" class="accent font-bold hover:underline">Log hier in</button>
                            </p>
                        </div>
                    </div>
                `;
            } else {
                main.innerHTML = `
                    <div class="max-w-md mx-auto mt-16 p-8 card border border-white/5 shadow-2xl">
                        <h2 class="text-3xl font-black italic accent uppercase tracking-tighter mb-2 text-center">ANIME<span class="text-white">MAX</span></h2>
                        <p class="text-[10px] text-zinc-500 uppercase tracking-widest text-center mb-8">Log in op je cloud-profiel</p>
                        
                        <div class="space-y-4">
                            <div>
                                <label class="text-[10px] font-black uppercase text-zinc-400 block mb-1">Gebruikersnaam</label>
                                <input type="text" id="login-username" class="w-full bg-black border border-white/10 p-4 rounded-xl outline-none font-bold text-sm focus:border-accent">
                            </div>
                            <div>
                                <label class="text-[10px] font-black uppercase text-zinc-400 block mb-1">Wachtwoord</label>
                                <input type="password" id="login-password" class="w-full bg-black border border-white/10 p-4 rounded-xl outline-none font-bold text-sm focus:border-accent">
                            </div>
                            <button onclick="handleLogin()" class="bg-accent text-black font-black py-4 rounded-xl w-full text-[10px] uppercase tracking-widest mt-4">Inloggen</button>
                            
                            <p class="text-center text-xs text-zinc-500 mt-4">
                                Nieuwe gebruiker? <button onclick="showLoginPage('register')" class="accent font-bold hover:underline">Maak een profiel aan</button>
                            </p>
                        </div>
                    </div>
                `;
            }
        }

        function render() {
            if (!activeFirebaseUser || activeFirebaseUser.isAnonymous) {
                showLoginPage('login');
                return;
            }

            const main = document.getElementById('content');
            
            // Sync navigatie-knoppen
            document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('accent'));
            document.querySelectorAll('.nav-link').forEach(el => el.classList.add('text-zinc-600'));
            const activeNav = document.getElementById('nav-' + window.app.view);
            if(activeNav) {
                activeNav.classList.add('accent');
                activeNav.classList.remove('text-zinc-600');
            }
            document.getElementById('prof-btn').classList.add('accent');

            if (window.app.view === 'watch') {
                main.innerHTML = `
                    <div class="aspect-video w-full bg-black rounded-t-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <iframe id="player" src="https://megaplay.buzz/stream/ani/${window.app.id}/${window.app.ep}/${window.app.mode}" allow="autoplay; fullscreen"></iframe>
                    </div>

                    <div class="bg-[#121212] p-4 rounded-b-2xl border border-white/10 mb-6 flex justify-between items-center flex-wrap gap-4 shadow-lg">
                        <div class="flex gap-2">
                            <button onclick="window.app.mode='sub';window.saveCloudData();render()" class="px-4 py-2 rounded-lg text-[9px] font-black uppercase ${window.app.mode=='sub'?'bg-accent text-black':'bg-black text-zinc-500'}">Sub</button>
                            <button onclick="window.app.mode='dub';window.saveCloudData();render()" class="px-4 py-2 rounded-lg text-[9px] font-black uppercase ${window.app.mode=='dub'?'bg-accent text-black':'bg-black text-zinc-500'}">Dub</button>
                        </div>
                        <div class="flex items-center gap-4">
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" id="toggle-autonext" class="toggle-checkbox hidden">
                                <div class="w-8 h-4 bg-zinc-800 rounded-full relative toggle-bg transition-all"><div class="w-4 h-4 bg-white rounded-full absolute left-0 toggle-dot transition-transform"></div></div>
                                <span class="text-[9px] font-black uppercase text-zinc-400">Auto Next</span>
                            </label>
                        </div>
                    </div>

                    <h1 id="w-title" class="text-xl font-black accent uppercase italic mb-4">Laden...</h1>
                    
                    <div id="local-status-card" class="bg-[#121212] p-4 rounded-xl border border-white/5 mb-6 flex flex-wrap gap-4 items-center justify-between shadow-lg">
                        <div>
                            <p class="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Jouw Status (Cloud database)</p>
                            <h3 id="local-status-text" class="text-xs font-bold text-white mt-1">Laden...</h3>
                        </div>
                        <div class="flex gap-2 flex-wrap">
                            <select id="local-status-select" class="bg-black text-white text-xs border border-white/10 rounded-lg p-2 font-bold outline-none">
                                <option value="Watching">Watching</option>
                                <option value="Watched">Completed</option>
                                <option value="Dropped">Dropped</option>
                            </select>
                            <input type="number" id="local-progress-input" value="0" class="bg-black text-white text-xs border border-white/10 rounded-lg p-2 w-16 text-center font-bold outline-none">
                            <button id="local-save-btn" class="bg-accent text-black px-4 py-2 rounded-lg text-xs font-black uppercase">Opslaan</button>
                        </div>
                    </div>

                    <div id="ep-grid" class="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-8"></div>
                    <h2 class="text-[10px] font-black uppercase text-zinc-500 mb-4 tracking-widest">Related Seasons</h2>
                    <div id="rel-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-2"></div>
                `;

                const autoNext = document.getElementById('toggle-autonext');
                autoNext.checked = window.app.autoNext;
                autoNext.addEventListener('change', e => { 
                    window.app.autoNext = e.target.checked; 
                    window.saveCloudData(); 
                });

                gql(`query($id:Int){Media(id:$id){title{romaji english}episodes coverImage{large}relations{edges{relationType node{id type title{romaji english}}}}}}`, {id: parseInt(window.app.id)}).then(res => {
                    if (!res || !res.data) {
                        document.getElementById('w-title').innerText = "Informatie niet gevonden";
                        return;
                    }
                    const m = res.data.Media;
                    const title = window.app.lang === 'english' ? (m.title.english || m.title.romaji) : m.title.romaji;
                    document.getElementById('w-title').innerText = title;
                    
                    // Direct lokaal opslaan in de geschiedenis
                    let rec = window.app.recent.filter(i => i.id != window.app.id);
                    rec.unshift({id: window.app.id, title, img: m.coverImage.large, ep: window.app.ep, ts: Date.now()});
                    window.app.recent = rec.slice(0, 12);
                    window.saveCloudData();

                    const localItem = window.app.xmlLib.find(item => item.id == window.app.id);
                    const statusText = document.getElementById('local-status-text');
                    const selectEl = document.getElementById('local-status-select');
                    const progressInput = document.getElementById('local-progress-input');
                    const saveBtn = document.getElementById('local-save-btn');

                    if (localItem) {
                        statusText.innerHTML = `<span class="accent">${localItem.status}</span> - Aflevering ${localItem.progress} / ${m.episodes || '?'}`;
                        selectEl.value = localItem.status;
                        progressInput.value = localItem.progress;
                    } else {
                        statusText.innerHTML = `<span class="text-zinc-500">Niet in je bibliotheek</span>`;
                        progressInput.value = window.app.ep;
                    }

                    saveBtn.onclick = () => {
                        window.updateLocalItem(window.app.id, title, selectEl.value, progressInput.value, m.episodes || 12);
                    };

                    const grid = document.getElementById('ep-grid');
                    for(let i=1; i<=(m.episodes || 24); i++) {
                        grid.innerHTML += `<button onclick="window.nav('watch', {id:${window.app.id}, ep:${i}})" class="aspect-square rounded-lg font-black text-[10px] ${i==window.app.ep?'bg-accent text-black shadow-lg':'bg-zinc-900 text-zinc-500'}">${i}</button>`;
                    }

                    const relGrid = document.getElementById('rel-grid');
                    m.relations.edges.filter(e => e.node.type === 'ANIME').forEach(e => {
                        const rTitle = window.app.lang === 'english' ? (e.node.title.english || e.node.title.romaji) : e.node.title.romaji;
                        relGrid.innerHTML += `
                            <button onclick="window.nav('watch', {id:${e.node.id}})" class="card w-full p-4 flex justify-between items-center text-[10px] font-black uppercase text-left">
                                <div class="truncate pr-4">
                                    <p class="truncate text-white">${rTitle}</p>
                                    <p class="text-[7px] text-zinc-600 mt-0.5">${e.relationType.replace(/_/g, ' ')}</p>
                                </div>
                                <i class="fa-solid fa-chevron-right text-zinc-800 text-[10px]"></i>
                            </button>
                        `;
                    });
                });
            }

            else if (window.app.view === 'profile') {
                main.innerHTML = `
                    <div class="max-w-md mx-auto space-y-6">
                        <div class="card p-8 border border-accent/20 shadow-2xl">
                            <div class="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                                <h2 class="font-black uppercase text-sm flex items-center gap-2"><i class="fa-solid fa-sliders accent"></i> Settings</h2>
                                <span class="bg-accent/10 border border-accent/20 text-accent text-[9px] px-3 py-1 rounded-full uppercase font-black">User: ${window.app.user}</span>
                            </div>
                            
                            <div class="space-y-4">
                                <label class="flex items-center justify-between p-2 cursor-pointer">
                                    <span class="text-xs font-black uppercase text-zinc-400">Show continue watching on home page</span>
                                    <input type="checkbox" id="set-continue" class="toggle-checkbox hidden" ${window.app.showContinue?'checked':''}>
                                    <div class="w-8 h-4 bg-zinc-800 rounded-full relative toggle-bg transition-all"><div class="w-4 h-4 bg-white rounded-full absolute left-0 toggle-dot transition-transform"></div></div>
                                </label>

                                <div class="flex items-center justify-between p-2">
                                    <span class="text-xs font-black uppercase text-zinc-400">Language for Anime Name</span>
                                    <div class="flex gap-4">
                                        <label class="flex items-center gap-1.5 text-xs font-bold"><input type="radio" name="lang" value="english" ${window.app.lang=='english'?'checked':''}> English</label>
                                        <label class="flex items-center gap-1.5 text-xs font-bold"><input type="radio" name="lang" value="japanese" ${window.app.lang=='japanese'?'checked':''}> Japanese</label>
                                    </div>
                                </div>

                                <div class="flex items-center justify-between p-2">
                                    <span class="text-xs font-black uppercase text-zinc-400">Auto Select Language</span>
                                    <select id="set-select" class="bg-black border border-white/10 p-2 rounded-lg text-xs outline-none accent font-bold">
                                        <option value="sub" ${window.app.autoSelect=='sub'?'selected':''}>Only Sub</option>
                                        <option value="dub" ${window.app.autoSelect=='dub'?'selected':''}>Only Dub</option>
                                    </select>
                                </div>

                                <label class="flex items-center justify-between p-2 cursor-pointer">
                                    <span class="text-xs font-black uppercase text-zinc-400">Auto Play</span>
                                    <input type="checkbox" id="set-autoplay" class="toggle-checkbox hidden" ${window.app.autoPlay?'checked':''}>
                                    <div class="w-8 h-4 bg-zinc-800 rounded-full relative toggle-bg transition-all"><div class="w-4 h-4 bg-white rounded-full absolute left-0 toggle-dot transition-transform"></div></div>
                                </label>

                                <label class="flex items-center justify-between p-2 cursor-pointer">
                                    <span class="text-xs font-black uppercase text-zinc-400">Auto Next</span>
                                    <input type="checkbox" id="set-autonext" class="toggle-checkbox hidden" ${window.app.autoNext?'checked':''}>
                                    <div class="w-8 h-4 bg-zinc-800 rounded-full relative toggle-bg transition-all"><div class="w-4 h-4 bg-white rounded-full absolute left-0 toggle-dot transition-transform"></div></div>
                                </label>

                                <label class="flex items-center justify-between p-2 cursor-pointer">
                                    <span class="text-xs font-black uppercase text-zinc-400">Auto Skip Intro</span>
                                    <input type="checkbox" id="set-autoskip" class="toggle-checkbox hidden" ${window.app.autoSkipIntro?'checked':''}>
                                    <div class="w-8 h-4 bg-zinc-800 rounded-full relative toggle-bg transition-all"><div class="w-4 h-4 bg-white rounded-full absolute left-0 toggle-dot transition-transform"></div></div>
                                </label>

                                <div class="flex items-center justify-between p-2">
                                    <span class="text-xs font-black uppercase text-zinc-400">Skip seconds</span>
                                    <input type="number" id="set-seconds" value="${window.app.skipSeconds}" class="w-16 bg-black border border-white/10 p-2 rounded-lg text-center font-bold text-xs outline-none">
                                </div>

                                <div class="p-2 border-t border-white/5 pt-4">
                                    <label class="text-[9px] font-black uppercase text-zinc-500 block mb-1">AniList Username (Voor openbare sync)</label>
                                    <input type="text" id="set-user" value="${window.app.user}" placeholder="Your Username (e.g. Kozjo09)" class="w-full bg-black border border-white/10 p-3 rounded-xl text-center outline-none font-bold text-xs">
                                </div>

                                <button onclick="saveSet()" class="bg-accent text-black font-black py-4 rounded-xl w-full text-[10px] uppercase tracking-widest mt-4">Save Settings</button>
                            </div>
                        </div>

                        <!-- EXPORT NAAR MYANIMELIST XML COMPATIBEL FORMAAT -->
                        <div class="card p-8 border border-green-500/20 text-center">
                            <h2 class="font-black uppercase mb-2 text-sm">Download MAL-XML Exporteer</h2>
                            <p class="text-[9px] text-zinc-500 uppercase mb-6 leading-relaxed">Exporteer je cloud-database direct als MyAnimeList XML-bestand!</p>
                            <button onclick="exportMyAnimeListXML()" class="block w-full bg-zinc-900 hover:bg-accent hover:text-black text-white font-black py-4 rounded-xl text-[10px] uppercase tracking-widest border border-white/15 transition-all">
                                <i class="fa-solid fa-file-export mr-1.5"></i> Download MyAnimeList XML
                            </button>
                        </div>

                        <!-- XML Upload -->
                        <div class="card p-8 border border-white/5 text-center">
                            <h2 class="font-black uppercase mb-4 text-sm">Import XML / JSON Watchlist</h2>
                            <input type="file" id="xml-input" class="text-[10px] text-zinc-500 mb-6 block mx-auto">
                            <button onclick="handleXML()" class="w-full bg-zinc-800 py-3 rounded-lg text-[10px] font-black uppercase border border-white/10">Upload Database</button>
                        </div>

                        <!-- VERWIJDER ZONE (Directe cloud database wipen) -->
                        <div class="card p-8 border border-red-500/10 text-center bg-red-950/5 animate-pulse">
                            <h2 class="font-black uppercase mb-2 text-sm text-red-400">Account Beheer</h2>
                            <p class="text-[9px] text-zinc-500 uppercase mb-6 leading-relaxed">Wis alle opgeslagen watchlists en profieldata definitief uit de cloud.</p>
                            <button onclick="deleteAccountCloud()" class="block w-full bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white font-black py-4 rounded-xl text-[10px] uppercase tracking-widest border border-red-500/20 transition-all">
                                <i class="fa-solid fa-trash-alt mr-1.5"></i> Wis Cloud Database
                            </button>
                        </div>
                    </div>
                `;
            }

            else if (window.app.view === 'library') {
                main.innerHTML = `
                    <div class="flex items-center justify-between mb-4 flex-wrap gap-2">
                        <h2 class="text-xl font-black accent uppercase italic">Local Library</h2>
                        <span class="text-[10px] text-zinc-500 uppercase font-black">${window.app.xmlLib.length} items</span>
                    </div>

                    <div class="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-4">
                        <button onclick="filterXml('All')" class="flex-shrink-0 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-wider ${window.app.libraryFilter === 'All' ? 'bg-accent text-black shadow-lg' : 'bg-zinc-900 text-zinc-400 border border-white/5'}">All</button>
                        <button onclick="filterXml('Watching')" class="flex-shrink-0 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-wider ${window.app.libraryFilter === 'Watching' ? 'bg-accent text-black shadow-lg' : 'bg-zinc-900 text-zinc-400 border border-white/5'}">Watching</button>
                        <button onclick="filterXml('Watched')" class="flex-shrink-0 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-wider ${window.app.libraryFilter === 'Watched' ? 'bg-accent text-black shadow-lg' : 'bg-zinc-900 text-zinc-400 border border-white/5'}">Completed</button>
                        <button onclick="filterXml('Dropped')" class="flex-shrink-0 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-wider ${window.app.libraryFilter === 'Dropped' ? 'bg-accent text-black shadow-lg' : 'bg-zinc-900 text-zinc-400 border border-white/5'}">Dropped</button>
                    </div>

                    <div id="xml-display-grid" class="space-y-3 mt-2"></div>
                `;

                const grid = document.getElementById('xml-display-grid');
                if(!window.app.xmlLib.length) {
                    grid.innerHTML = `<p class="opacity-30 text-xs text-center py-10 uppercase font-black">Geen data gevonden. Importeer een XML/JSON bestand of begin met kijken!</p>`;
                    return;
                }

                let filteredXml = window.app.xmlLib;
                if(window.app.libraryFilter !== 'All') {
                    filteredXml = window.app.xmlLib.filter(item => item.status === window.app.libraryFilter);
                }

                if(filteredXml.length === 0) {
                    grid.innerHTML = `<p class="opacity-20 text-xs text-center py-10 uppercase font-black">Geen items gevonden in deze map</p>`;
                    return;
                }

                filteredXml.forEach(item => {
                    grid.innerHTML += `
                        <div class="card w-full p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3 border border-white/5 shadow-md">
                            <div class="truncate pr-4 flex-1">
                                <p class="text-white truncate font-bold text-sm mb-1">${item.title}</p>
                                <div class="flex items-center gap-2">
                                    <span class="text-[9px] bg-zinc-900 text-accent px-2 py-0.5 rounded font-black uppercase">${item.status}</span>
                                    <span class="text-[9px] text-zinc-500 font-bold uppercase">Progress: ${item.progress} / ${item.episodes || '?'}</span>
                                </div>
                            </div>
                            
                            <div class="flex items-center gap-2 self-end sm:self-auto">
                                <button onclick="window.nav('watch', {id:${item.id}, ep:${item.progress || 1}})" class="bg-[#1a1a1a] hover:bg-accent hover:text-black p-2.5 rounded-lg text-xs text-zinc-400 transition-colors"><i class="fa-solid fa-play"></i> Watch</button>
                                <button onclick="quickIncrement(${item.id})" class="bg-[#1a1a1a] hover:bg-zinc-800 p-2.5 rounded-lg text-xs text-zinc-400 font-black" title="Volgende aflevering">+1 Ep</button>
                                <button onclick="changeLocalFolderPrompt(${item.id})" class="bg-[#1a1a1a] hover:bg-zinc-800 p-2.5 rounded-lg text-xs text-zinc-400"><i class="fa-solid fa-folder-open"></i></button>
                                <button onclick="window.deleteLocalItem(${item.id})" class="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white p-2.5 rounded-lg text-xs transition-colors"><i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    `;
                });
            }

            else if (window.app.view === 'cloud') {
                if(!window.app.user) return main.innerHTML = `<p class="text-center py-20 opacity-20 uppercase font-black text-xs tracking-widest">Voeg je AniList gebruikersnaam toe bij Instellingen</p>`;
                
                main.innerHTML = `
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-xl font-black accent uppercase italic">Cloud List: ${window.app.user}</h2>
                    </div>
                    
                    <div class="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-2">
                        <button onclick="filterCloud('All')" class="flex-shrink-0 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-wider ${window.app.cloudFilter === 'All' ? 'bg-accent text-black shadow-lg' : 'bg-zinc-900 text-zinc-400 border border-white/5'}">All Lists</button>
                        <button onclick="filterCloud('Watching')" class="flex-shrink-0 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-wider ${window.app.cloudFilter === 'Watching' ? 'bg-accent text-black shadow-lg' : 'bg-zinc-900 text-zinc-400 border border-white/5'}">Watching</button>
                        <button onclick="filterCloud('Completed')" class="flex-shrink-0 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-wider ${window.app.cloudFilter === 'Completed' ? 'bg-accent text-black shadow-lg' : 'bg-zinc-900 text-zinc-400 border border-white/5'}">Completed</button>
                        <button onclick="filterCloud('Dropped')" class="flex-shrink-0 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-wider ${window.app.cloudFilter === 'Dropped' ? 'bg-accent text-black shadow-lg' : 'bg-zinc-900 text-zinc-400 border border-white/5'}">Dropped</button>
                    </div>

                    <div id="c-list" class="grid grid-cols-2 gap-4">Laden...</div>
                `;

                gql(`query($u:String){MediaListCollection(userName:$u,type:ANIME){lists{name entries{progress media{id title{romaji english}coverImage{large}episodes}}}}}`, {u: window.app.user}).then(res => {
                    const list = document.getElementById('c-list');
                    if (!res || !res.data || !res.data.MediaListCollection) {
                        list.innerHTML = `<p class="col-span-2 text-center py-10 opacity-30 text-xs font-black uppercase">Kon de openbare AniList van ${window.app.user} niet vinden of laden.</p>`;
                        return;
                    }
                    
                    list.innerHTML = '';
                    let itemsFound = false;
                    res.data.MediaListCollection.lists.forEach(l => {
                        const listName = l.name.toLowerCase();
                        const filterLower = window.app.cloudFilter.toLowerCase();
                        
                        if(window.app.cloudFilter !== 'All' && !listName.includes(filterLower)) return;

                        l.entries.forEach(e => {
                            itemsFound = true;
                            const t = window.app.lang === 'english' ? (e.media.title.english || e.media.title.romaji) : e.media.title.romaji;
                            list.innerHTML += `
                                <div class="text-left w-full group relative">
                                    <button onclick="window.nav('watch', {id:${e.media.id}, ep:${e.progress+1}})" class="w-full text-left">
                                        <div class="aspect-video rounded-xl overflow-hidden mb-2 relative bg-zinc-900 border border-white/5">
                                            <img src="${e.media.coverImage.large}" class="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-300">
                                            <div class="absolute inset-0 flex items-center justify-center flex-col gap-1">
                                                <span class="text-[8px] font-black accent uppercase bg-black/60 px-2 py-1 rounded">Resume Ep ${e.progress+1}</span>
                                            </div>
                                        </div>
                                        <p class="text-[9px] font-black uppercase truncate text-zinc-300 leading-none mb-1">${t}</p>
                                        <p class="text-[7px] text-zinc-500 uppercase tracking-widest font-black mb-2">${l.name}</p>
                                    </button>
                                    
                                    <button onclick="importSingleCloudItem(${e.media.id}, '${t.replace(/'/g, "\\'")}', '${l.name}', ${e.progress}, ${e.media.episodes || 12})" class="absolute top-2 right-2 bg-black/90 hover:bg-accent hover:text-black border border-white/10 text-white p-1.5 rounded text-[8px] font-black uppercase transition-all shadow-md" title="Kopieer naar Cloud Bibliotheek">
                                        <i class="fa-solid fa-cloud-arrow-down mr-1"></i> Import
                                    </button>
                                </div>
                            `;
                        });
                    });

                    if(!itemsFound) {
                        list.className = "block text-center py-10 opacity-30";
                        list.innerHTML = `<p class="text-xs uppercase font-black">Geen anime gevonden in deze lijst</p>`;
                    }
                });
            }

            else if (window.app.view === 'search') {
                main.innerHTML = `
                    <div class="max-w-md mx-auto mb-10">
                        <input type="text" id="live-search" placeholder="Zoek op titel..." onkeyup="liveSearch(event)" class="w-full bg-zinc-900/50 border border-white/10 p-4 rounded-xl outline-none font-bold text-sm focus:border-accent/40">
                    </div>
                    <div id="search-grid" class="grid grid-cols-2 sm:grid-cols-6 gap-3"></div>
                `;
            }

            else {
                // HOME VIEW
                main.innerHTML = `
                    ${window.app.showContinue && window.app.recent.length ? `
                        <h2 class="text-[10px] font-black uppercase mb-4 opacity-50 tracking-widest">Continue Watching (Cloud)</h2>
                        <div class="flex gap-3 overflow-x-auto no-scrollbar mb-10">
                            ${window.app.recent.map(r => `
                                <button onclick="window.nav('watch', {id:${r.id}, ep:${r.ep}})" class="flex-shrink-0 w-40 group text-left animate-fade-in">
                                    <div class="aspect-video rounded-xl bg-zinc-900 border border-white/5 relative overflow-hidden mb-2">
                                        <img src="${r.img}" class="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500">
                                        <div class="absolute bottom-2 right-2 bg-black/85 px-2 py-0.5 rounded text-[8px] font-black accent">EP ${r.ep}</div>
                                    </div>
                                    <p class="text-[9px] font-black uppercase truncate text-zinc-400 group-hover:text-white transition-colors">${r.title}</p>
                                </button>
                            `).join('')}
                        </div>
                    ` : ''}
                    <h2 class="text-xs font-black uppercase tracking-widest mb-6">Trending Now</h2>
                    <div id="h-grid" class="grid grid-cols-2 sm:grid-cols-6 gap-3"></div>
                `;
                gql(`query{Page(perPage:24){media(type:ANIME,sort:TRENDING_DESC){id title{romaji english}coverImage{large}}}}`).then(res => {
                    const grid = document.getElementById('h-grid');
                    if(!grid || !res || !res.data) return;
                    res.data.Page.media.forEach(m => {
                        const t = window.app.lang === 'english' ? (m.title.english || m.title.romaji) : m.title.romaji;
                        grid.innerHTML += `
                            <button onclick="window.nav('watch', {id:${m.id}})" class="text-left group animate-fade-in">
                                <div class="aspect-[2/3] rounded-xl overflow-hidden mb-2 border border-white/5">
                                    <img src="${m.coverImage.large}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                </div>
                                <p class="text-[9px] font-black uppercase truncate leading-none px-1 text-zinc-400 group-hover:text-white transition-colors">${t}</p>
                            </button>
                        `;
                    });
                });
            }
        }

        // --- LOKALE INTERACTIE EN EXPORT MET MYANIMELIST XML COMPATIBILITEIT ---
        window.quickIncrement = function(id) {
            window.app.xmlLib = window.app.xmlLib.map(item => {
                if (item.id == id) {
                    const nextProgress = item.progress + 1;
                    return { ...item, progress: nextProgress };
                }
                return item;
            });
            window.saveCloudData();
            render();
        }

        window.changeLocalFolderPrompt = function(id) {
            const item = window.app.xmlLib.find(i => i.id == id);
            if (!item) return;
            const newStatus = prompt("Typ een nieuwe status (Watching, Watched, Dropped):", item.status);
            if (newStatus && ["Watching", "Watched", "Dropped"].includes(newStatus)) {
                window.updateLocalItem(item.id, item.title, newStatus, item.progress, item.episodes);
            } else if (newStatus) {
                window.showToast("Ongeldige status! Gebruik Watching, Watched of Dropped.", "error");
            }
        }

        window.importSingleCloudItem = function(id, title, cloudStatus, progress, totalEpisodes) {
            let localStatus = "Watching";
            if (cloudStatus.toLowerCase().includes("completed")) localStatus = "Watched";
            if (cloudStatus.toLowerCase().includes("dropped")) localStatus = "Dropped";

            window.updateLocalItem(id, title, localStatus, progress, totalEpisodes);
        }

        // --- EXPORT MYANIMELIST XML ---
        window.exportMyAnimeListXML = function() {
            if(!window.app.xmlLib.length) {
                window.showToast("Geen items in je bibliotheek om te exporteren!", "error");
                return;
            }

            let xml = `<?xml version="1.0" encoding="UTF-8" ?>\n`;
            xml += `<!--\n  Exported from AnimeMax Pro (Cloud Multi-User Database Edition)\n  Format: MyAnimeList XML Import/Export standard v1.0.0\n-->\n`;
            xml += `<myanimelist>\n`;
            
            xml += `  <myinfo>\n`;
            xml += `    <user_id>0</user_id>\n`;
            xml += `    <user_name>${window.app.user}</user_name>\n`;
            xml += `    <user_export_type>1</user_export_type>\n`;
            xml += `    <user_total_anime>${window.app.xmlLib.length}</user_total_anime>\n`;
            xml += `  </myinfo>\n`;

            window.app.xmlLib.forEach(item => {
                let statusVal = "Watching"; 
                if (item.status === "Watched") statusVal = "Completed";
                if (item.status === "Dropped") statusVal = "Dropped";
                if (item.status === "Plan to Watch") statusVal = "Plan to Watch";

                xml += `  <anime>\n`;
                xml += `    <series_animedb_id>${item.id}</series_animedb_id>\n`;
                xml += `    <series_title><![CDATA[${item.title}]]></series_title>\n`;
                xml += `    <series_type>TV</series_type>\n`;
                xml += `    <series_episodes>${item.episodes || 0}</series_episodes>\n`;
                xml += `    <my_id>0</my_id>\n`;
                xml += `    <my_watched_episodes>${item.progress || 0}</my_watched_episodes>\n`;
                xml += `    <my_start_date>0000-00-00</my_start_date>\n`;
                xml += `    <my_finish_date>0000-00-00</my_finish_date>\n`;
                xml += `    <my_score>0</my_score>\n`;
                xml += `    <my_status>${statusVal}</my_status>\n`;
                xml += `    <my_rewatching></my_rewatching>\n`;
                xml += `    <my_rewatching_ep>0</my_rewatching_ep>\n`;
                xml += `    <my_last_updated>${Math.floor(Date.now() / 1000)}</my_last_updated>\n`;
                xml += `    <my_tags><![CDATA[]]></my_tags>\n`;
                xml += `  </anime>\n`;
            });

            xml += `</myanimelist>\n`;

            const blob = new Blob([xml], { type: "text/xml" });
            const url = URL.createObjectURL(blob);
            const downloadAnchor = document.createElement('a');
            downloadAnchor.href = url;
            downloadAnchor.download = `animemax_${window.app.user}_mal_export_${new Date().toISOString().slice(0,10)}.xml`;
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            URL.revokeObjectURL(url);
            window.showToast("XML export gedownload!");
        }

        // --- SETTINGS EN FILTERS LOGICA ---
        window.filterCloud = function(status) {
            window.app.cloudFilter = status;
            render();
        }

        window.filterXml = function(status) {
            window.app.libraryFilter = status;
            render();
        }

        window.saveSet = function() {
            window.app.user = document.getElementById('set-user').value.trim();
            window.app.lang = document.querySelector('input[name="lang"]:checked').value;
            window.app.autoSelect = document.getElementById('set-select').value;
            window.app.showContinue = document.getElementById('set-continue').checked;
            window.app.autoPlay = document.getElementById('set-autoplay').checked;
            window.app.autoNext = document.getElementById('set-autonext').checked;
            window.app.autoSkipIntro = document.getElementById('set-autoskip').checked;
            window.app.skipSeconds = parseInt(document.getElementById('set-seconds').value || '5');

            window.saveCloudData();
            window.showToast("Instellingen opgeslagen in de cloud!");
            render();
        }

        window.liveSearch = function(e) {
            const val = e.target.value;
            if(!val) return;
            gql(`query($s:String){Page(perPage:18){media(search:$s,type:ANIME){id title{romaji english}coverImage{large}}}}`, {s: val}).then(res => {
                const grid = document.getElementById('search-grid');
                if(!grid || !res || !res.data) return; grid.innerHTML = '';
                res.data.Page.media.forEach(m => {
                    const t = window.app.lang === 'english' ? (m.title.english || m.title.romaji) : m.title.romaji;
                    grid.innerHTML += `
                        <button onclick="window.nav('watch', {id:${m.id}})" class="text-left animate-fade-in">
                            <div class="aspect-[2/3] rounded-xl overflow-hidden mb-2 border border-white/5">
                                <img src="${m.coverImage.large}" class="w-full h-full object-cover">
                            </div>
                            <p class="text-[9px] font-black uppercase truncate leading-none px-1 text-zinc-400">${t}</p>
                        </button>
                    `;
                });
            });
        }

        window.handleXML = function() {
            const file = document.getElementById('xml-input').files[0];
            if(!file) return;
            const reader = new FileReader();
            reader.onload = e => {
                const content = e.target.result;
                try {
                    const jsonData = JSON.parse(content);
                    if (Array.isArray(jsonData)) {
                        window.app.xmlLib = jsonData;
                        window.saveCloudData();
                        window.showToast("Database succesvol geïmporteerd!");
                        window.nav('library');
                        return;
                    }
                } catch(err) {
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(content, "text/xml");
                    
                    const malAnimeList = xmlDoc.getElementsByTagName("anime");
                    if (malAnimeList && malAnimeList.length > 0) {
                        let data = [];
                        for(let animeNode of malAnimeList) {
                            const dbId = animeNode.getElementsByTagName("series_animedb_id")[0]?.textContent;
                            const seriesTitleNode = animeNode.getElementsByTagName("series_title")[0];
                            const title = seriesTitleNode ? seriesTitleNode.textContent : "Unknown Title";
                            const watchedEps = animeNode.getElementsByTagName("my_watched_episodes")[0]?.textContent || "0";
                            const totalEps = animeNode.getElementsByTagName("series_episodes")[0]?.textContent || "0";
                            const myStatus = animeNode.getElementsByTagName("my_status")[0]?.textContent || "Watching";

                            let statusStr = "Watching";
                            if (myStatus.toLowerCase() === "completed") statusStr = "Watched";
                            if (myStatus.toLowerCase() === "dropped") statusStr = "Dropped";
                            if (myStatus.toLowerCase() === "plan to watch" || myStatus.toLowerCase() === "planning") statusStr = "Plan to Watch";

                            if (dbId) {
                                data.push({
                                    id: dbId,
                                    title: title,
                                    status: statusStr,
                                    progress: parseInt(watchedEps),
                                    episodes: parseInt(totalEps)
                                });
                            }
                        }
                        window.app.xmlLib = data;
                        window.saveCloudData();
                        window.showToast(`MyAnimeList XML succesvol geïmporteerd (${data.length} items)!`);
                        window.nav('library');
                        return;
                    }

                    const folders = xmlDoc.getElementsByTagName("folder");
                    if (folders && folders.length > 0) {
                        let data = [];
                        for(let folder of folders) {
                            const statusName = folder.getElementsByTagName("name")[0].textContent;
                            const items = folder.getElementsByTagName("item");
                            for(let item of items) {
                                const al = item.getElementsByTagName("al")[0].textContent;
                                const idMatch = al.match(/anime\/(\d+)/);
                                if(idMatch) {
                                    data.push({ 
                                        id: idMatch[1], 
                                        title: item.getElementsByTagName("name")[0].textContent, 
                                        status: statusName, 
                                        progress: 0,
                                        episodes: 12
                                    });
                                }
                            }
                        }
                        window.app.xmlLib = data;
                        window.saveCloudData();
                        window.showToast(`HiAnime XML database succesvol geïmporteerd (${data.length} items)!`);
                        window.nav('library');
                        return;
                    }

                    window.showToast("Fout: XML formaat wordt niet herkend.", "error");
                }
            };
            reader.readAsText(file);
        }
    </script>
</body>
</html>
