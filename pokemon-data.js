// Pokemon data for the kids' game
const pokemonData = {
    types: {
        fire: {
            name: "Fire Type",
            description: "Fire Pokémon are known for their blazing hot attacks! They breathe fire, create flames, and love warm places. These Pokémon are usually brave and energetic. Fire beats Grass, but Water can put out their flames!",
            color: "#ff6b35",
            samples: [
                { name: "charmander", display: "Charmander", id: 4 },
                { name: "vulpix", display: "Vulpix", id: 37 },
                { name: "growlithe", display: "Growlithe", id: 58 }
            ]
        },
        water: {
            name: "Water Type",
            description: "Water Pokémon live in oceans, rivers, and lakes! They can swim super fast and shoot powerful water attacks. These Pokémon are usually calm and helpful. Water beats Fire, but Grass can absorb their water!",
            color: "#4facfe",
            samples: [
                { name: "squirtle", display: "Squirtle", id: 7 },
                { name: "psyduck", display: "Psyduck", id: 54 },
                { name: "magikarp", display: "Magikarp", id: 129 }
            ]
        },
        grass: {
            name: "Grass Type",
            description: "Grass Pokémon love nature and sunshine! They can control plants, create vines, and make flowers bloom. These Pokémon are usually gentle and love to help plants grow. Grass beats Water, but Fire can burn their leaves!",
            color: "#56ab2f",
            samples: [
                { name: "bulbasaur", display: "Bulbasaur", id: 1 },
                { name: "oddish", display: "Oddish", id: 43 },
                { name: "bellsprout", display: "Bellsprout", id: 69 }
            ]
        },
        electric: {
            name: "Electric Type",
            description: "Electric Pokémon create lightning and thunder! They can charge up electricity and shoot powerful electric bolts. These Pokémon are usually energetic and love to spark! Electric moves are super effective against Flying and Water types!",
            color: "#f093fb",
            samples: [
                { name: "pikachu", display: "Pikachu", id: 25 },
                { name: "magnemite", display: "Magnemite", id: 81 },
                { name: "voltorb", display: "Voltorb", id: 100 }
            ]
        },
        psychic: {
            name: "Psychic Type",
            description: "Psychic Pokémon have amazing mental powers! They can read minds, move things without touching them, and see the future. These Pokémon are usually very smart and mysterious!",
            color: "#667eea",
            samples: [
                { name: "abra", display: "Abra", id: 63 },
                { name: "slowpoke", display: "Slowpoke", id: 79 },
                { name: "mewtwo", display: "Mewtwo", id: 150 }
            ]
        },
        ghost: {
            name: "Ghost Type",
            description: "Ghost Pokémon are spooky but usually friendly! They can disappear, walk through walls, and play harmless pranks. These Pokémon love to hide and surprise people, but they're not scary - just playful!",
            color: "#434343",
            samples: [
                { name: "gastly", display: "Gastly", id: 92 },
                { name: "haunter", display: "Haunter", id: 93 },
                { name: "gengar", display: "Gengar", id: 94 }
            ]
        }
    },
    
    pokemon: {
        fire: [
            { name: "charmander", display: "Charmander", id: 4, moves: ["Scratch", "Ember", "Growl"] },
            { name: "charmeleon", display: "Charmeleon", id: 5, moves: ["Flame Burst", "Scary Face", "Fire Fang"] },
            { name: "charizard", display: "Charizard", id: 6, moves: ["Flamethrower", "Dragon Claw", "Fire Blast"] },
            { name: "vulpix", display: "Vulpix", id: 37, moves: ["Ember", "Quick Attack", "Confuse Ray"] },
            { name: "ninetales", display: "Ninetales", id: 38, moves: ["Fire Blast", "Extrasensory", "Solar Beam"] },
            { name: "growlithe", display: "Growlithe", id: 58, moves: ["Bite", "Flame Wheel", "Howl"] },
            { name: "arcanine", display: "Arcanine", id: 59, moves: ["Fire Fang", "Thunder Fang", "Extreme Speed"] },
            { name: "ponyta", display: "Ponyta", id: 77, moves: ["Flame Charge", "Stomp", "Fire Spin"] },
            { name: "rapidash", display: "Rapidash", id: 78, moves: ["Megahorn", "Fire Blast", "Bounce"] },
            { name: "magmar", display: "Magmar", id: 126, moves: ["Fire Punch", "Leer", "Smog"] },
            { name: "flareon", display: "Flareon", id: 136, moves: ["Fire Fang", "Quick Attack", "Lava Plume"] },
            { name: "moltres", display: "Moltres", id: 146, moves: ["Fire Blast", "Sky Attack", "Heat Wave"] },
            { name: "cyndaquil", display: "Cyndaquil", id: 155, moves: ["Tackle", "Leer", "Ember"] },
            { name: "quilava", display: "Quilava", id: 156, moves: ["Flame Wheel", "Quick Attack", "Swift"] },
            { name: "typhlosion", display: "Typhlosion", id: 157, moves: ["Eruption", "Thunder Punch", "Fire Blast"] }
        ],
        
        water: [
            { name: "squirtle", display: "Squirtle", id: 7, moves: ["Tackle", "Water Gun", "Withdraw"] },
            { name: "wartortle", display: "Wartortle", id: 8, moves: ["Water Pulse", "Bite", "Rapid Spin"] },
            { name: "blastoise", display: "Blastoise", id: 9, moves: ["Hydro Pump", "Skull Bash", "Hydro Cannon"] },
            { name: "psyduck", display: "Psyduck", id: 54, moves: ["Water Gun", "Confusion", "Scratch"] },
            { name: "golduck", display: "Golduck", id: 55, moves: ["Aqua Jet", "Zen Headbutt", "Hydro Pump"] },
            { name: "poliwag", display: "Poliwag", id: 60, moves: ["Water Gun", "Hypnosis", "Bubble Beam"] },
            { name: "poliwhirl", display: "Poliwhirl", id: 61, moves: ["Body Slam", "Bubble Beam", "Mud Shot"] },
            { name: "poliwrath", display: "Poliwrath", id: 62, moves: ["Dynamic Punch", "Hydro Pump", "Ice Punch"] },
            { name: "tentacool", display: "Tentacool", id: 72, moves: ["Poison Sting", "Water Gun", "Wrap"] },
            { name: "tentacruel", display: "Tentacruel", id: 73, moves: ["Hydro Pump", "Sludge Bomb", "Rapid Spin"] },
            { name: "slowpoke", display: "Slowpoke", id: 79, moves: ["Water Gun", "Confusion", "Headbutt"] },
            { name: "slowbro", display: "Slowbro", id: 80, moves: ["Water Pulse", "Psychic", "Amnesia"] },
            { name: "seel", display: "Seel", id: 86, moves: ["Headbutt", "Aurora Beam", "Ice Shard"] },
            { name: "dewgong", display: "Dewgong", id: 87, moves: ["Ice Beam", "Aqua Jet", "Sheer Cold"] },
            { name: "shellder", display: "Shellder", id: 90, moves: ["Tackle", "Water Gun", "Withdraw"] }
        ],
        
        grass: [
            { name: "bulbasaur", display: "Bulbasaur", id: 1, moves: ["Tackle", "Vine Whip", "Growl"] },
            { name: "ivysaur", display: "Ivysaur", id: 2, moves: ["Razor Leaf", "Poison Powder", "Sleep Powder"] },
            { name: "venusaur", display: "Venusaur", id: 3, moves: ["Solar Beam", "Petal Dance", "Earthquake"] },
            { name: "oddish", display: "Oddish", id: 43, moves: ["Absorb", "Sweet Scent", "Acid"] },
            { name: "gloom", display: "Gloom", id: 44, moves: ["Petal Dance", "Toxic", "Moonlight"] },
            { name: "vileplume", display: "Vileplume", id: 45, moves: ["Petal Blizzard", "Aromatherapy", "Solar Beam"] },
            { name: "paras", display: "Paras", id: 46, moves: ["Scratch", "Stun Spore", "Poison Powder"] },
            { name: "parasect", display: "Parasect", id: 47, moves: ["Slash", "Spore", "X-Scissor"] },
            { name: "bellsprout", display: "Bellsprout", id: 69, moves: ["Vine Whip", "Growth", "Wrap"] },
            { name: "weepinbell", display: "Weepinbell", id: 70, moves: ["Razor Leaf", "Poison Powder", "Slam"] },
            { name: "victreebel", display: "Victreebel", id: 71, moves: ["Leaf Tornado", "Sweet Scent", "Leaf Storm"] },
            { name: "exeggcute", display: "Exeggcute", id: 102, moves: ["Barrage", "Hypnosis", "Confusion"] },
            { name: "exeggutor", display: "Exeggutor", id: 103, moves: ["Seed Bomb", "Psychic", "Solar Beam"] },
            { name: "tangela", display: "Tangela", id: 114, moves: ["Vine Whip", "Bind", "Poison Powder"] },
            { name: "chikorita", display: "Chikorita", id: 152, moves: ["Tackle", "Growl", "Razor Leaf"] }
        ],
        
        electric: [
            { name: "pikachu", display: "Pikachu", id: 25, moves: ["Thunder Shock", "Quick Attack", "Thunder Wave"] },
            { name: "raichu", display: "Raichu", id: 26, moves: ["Thunder", "Double Team", "Thunder Punch"] },
            { name: "magnemite", display: "Magnemite", id: 81, moves: ["Thunder Shock", "Magnet Rise", "Spark"] },
            { name: "magneton", display: "Magneton", id: 82, moves: ["Thunder Wave", "Discharge", "Zap Cannon"] },
            { name: "voltorb", display: "Voltorb", id: 100, moves: ["Tackle", "Thunder Shock", "Self-Destruct"] },
            { name: "electrode", display: "Electrode", id: 101, moves: ["Thunder", "Light Screen", "Explosion"] },
            { name: "electabuzz", display: "Electabuzz", id: 125, moves: ["Thunder Punch", "Swift", "Thunder"] },
            { name: "jolteon", display: "Jolteon", id: 135, moves: ["Thunder Fang", "Pin Missile", "Thunder"] },
            { name: "zapdos", display: "Zapdos", id: 145, moves: ["Thunder", "Drill Peck", "Heat Wave"] },
            { name: "chinchou", display: "Chinchou", id: 170, moves: ["Bubble", "Thunder Wave", "Flail"] },
            { name: "lanturn", display: "Lanturn", id: 171, moves: ["Discharge", "Hydro Pump", "Signal Beam"] },
            { name: "pichu", display: "Pichu", id: 172, moves: ["Thunder Shock", "Charm", "Sweet Kiss"] },
            { name: "mareep", display: "Mareep", id: 179, moves: ["Tackle", "Thunder Wave", "Thunder Shock"] },
            { name: "flaaffy", display: "Flaaffy", id: 180, moves: ["Thunder Punch", "Discharge", "Fire Punch"] },
            { name: "ampharos", display: "Ampharos", id: 181, moves: ["Thunder", "Dragon Pulse", "Focus Blast"] }
        ],
        
        psychic: [
            { name: "abra", display: "Abra", id: 63, moves: ["Teleport", "Confusion", "Psychic"] },
            { name: "kadabra", display: "Kadabra", id: 64, moves: ["Confusion", "Kinesis", "Psychic"] },
            { name: "alakazam", display: "Alakazam", id: 65, moves: ["Psychic", "Future Sight", "Psycho Cut"] },
            { name: "slowpoke", display: "Slowpoke", id: 79, moves: ["Confusion", "Water Gun", "Zen Headbutt"] },
            { name: "slowbro", display: "Slowbro", id: 80, moves: ["Psychic", "Water Pulse", "Amnesia"] },
            { name: "drowzee", display: "Drowzee", id: 96, moves: ["Pound", "Hypnosis", "Confusion"] },
            { name: "hypno", display: "Hypno", id: 97, moves: ["Psychic", "Hypnosis", "Dream Eater"] },
            { name: "exeggcute", display: "Exeggcute", id: 102, moves: ["Barrage", "Hypnosis", "Confusion"] },
            { name: "exeggutor", display: "Exeggutor", id: 103, moves: ["Psychic", "Egg Bomb", "Solar Beam"] },
            { name: "starmie", display: "Starmie", id: 121, moves: ["Psychic", "Hydro Pump", "Rapid Spin"] },
            { name: "mr-mime", display: "Mr. Mime", id: 122, moves: ["Psychic", "Barrier", "Magical Leaf"] },
            { name: "jynx", display: "Jynx", id: 124, moves: ["Ice Beam", "Psychic", "Lovely Kiss"] },
            { name: "mewtwo", display: "Mewtwo", id: 150, moves: ["Psychic", "Recover", "Psystrike"] },
            { name: "mew", display: "Mew", id: 151, moves: ["Psychic", "Transform", "Ancient Power"] },
            { name: "natu", display: "Natu", id: 177, moves: ["Peck", "Leer", "Night Shade"] }
        ],
        
        ghost: [
            { name: "gastly", display: "Gastly", id: 92, moves: ["Lick", "Confuse Ray", "Night Shade"] },
            { name: "haunter", display: "Haunter", id: 93, moves: ["Shadow Punch", "Hypnosis", "Dream Eater"] },
            { name: "gengar", display: "Gengar", id: 94, moves: ["Shadow Ball", "Dream Eater", "Hypnosis"] },
            { name: "misdreavus", display: "Misdreavus", id: 200, moves: ["Growl", "Psywave", "Spite"] },
            { name: "shedinja", display: "Shedinja", id: 292, moves: ["Scratch", "Harden", "Shadow Ball"] },
            { name: "sableye", display: "Sableye", id: 302, moves: ["Leer", "Scratch", "Night Shade"] },
            { name: "banette", display: "Banette", id: 354, moves: ["Knock Off", "Screech", "Shadow Ball"] },
            { name: "duskull", display: "Duskull", id: 355, moves: ["Leer", "Night Shade", "Disable"] },
            { name: "dusclops", display: "Dusclops", id: 356, moves: ["Shadow Punch", "Curse", "Will-O-Wisp"] },
            { name: "drifloon", display: "Drifloon", id: 425, moves: ["Constrict", "Minimize", "Gust"] },
            { name: "drifblim", display: "Drifblim", id: 426, moves: ["Shadow Ball", "Explosion", "Ominous Wind"] },
            { name: "spiritomb", display: "Spiritomb", id: 442, moves: ["Curse", "Pursuit", "Confuse Ray"] },
            { name: "rotom", display: "Rotom", id: 479, moves: ["Thunder Shock", "Confuse Ray", "Thunder Wave"] },
            { name: "yamask", display: "Yamask", id: 562, moves: ["Astonish", "Protect", "Disable"] },
            { name: "cofagrigus", display: "Cofagrigus", id: 563, moves: ["Shadow Ball", "Curse", "Scary Face"] }
        ]
    }
};

// Function to get Pokemon sprite URL
function getPokemonSpriteUrl(id, isGif = true) {
    if (isGif) {
        // Use animated sprites from PokéAPI
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;
    } else {
        // Use static sprites for thumbnails
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }
}

// Function to get Tenor search URL for a move with Pokemon name
function getTenorSearchUrl(moveName, pokemonName = '') {
    // Clean up move name for URL (replace spaces with hyphens, remove special characters)
    const cleanMoveName = moveName
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
    
    // Clean up pokemon name similarly
    const cleanPokemonName = pokemonName
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
    
    // Create search term with pokemon name for more specific results
    let searchTerm = cleanMoveName;
    if (cleanPokemonName) {
        searchTerm = `pokemon-${cleanPokemonName}-${cleanMoveName}`;
    }
    
    // Create Tenor search URL
    return `https://tenor.com/search/${searchTerm}-gifs`;
}

// Function for backward compatibility (now returns Tenor URL)
function getMoveGifUrl(moveName) {
    return getTenorSearchUrl(moveName);
}

// Function to get random Pokemon of a specific type
function getRandomPokemon(type, count = 10) {
    const typeData = pokemonData.pokemon[type];
    if (!typeData) return [];
    
    const shuffled = [...typeData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Quiz questions generator
function generateQuizQuestions(learnedPokemon, selectedType) {
    const questions = [];
    const otherTypes = Object.keys(pokemonData.types).filter(t => t !== selectedType);
    
    // Question 1: What type are these Pokemon?
    const randomPokemon = learnedPokemon[Math.floor(Math.random() * learnedPokemon.length)];
    const wrongTypes = otherTypes.sort(() => 0.5 - Math.random()).slice(0, 3);
    questions.push({
        question: `What type is ${randomPokemon.display}?`,
        correct: pokemonData.types[selectedType].name,
        options: [
            pokemonData.types[selectedType].name,
            ...wrongTypes.map(t => pokemonData.types[t].name)
        ].sort(() => 0.5 - Math.random())
    });
    
    // Question 2: Which Pokemon knows this move?
    const pokemonWithMoves = learnedPokemon.filter(p => p.moves.length > 0);
    if (pokemonWithMoves.length > 0) {
        const movesPokemon = pokemonWithMoves[Math.floor(Math.random() * pokemonWithMoves.length)];
        const correctMove = movesPokemon.moves[Math.floor(Math.random() * movesPokemon.moves.length)];
        const wrongPokemon = learnedPokemon.filter(p => p.name !== movesPokemon.name).slice(0, 3);
        
        questions.push({
            question: `Which Pokémon knows the move "${correctMove}"?`,
            correct: movesPokemon.display,
            options: [
                movesPokemon.display,
                ...wrongPokemon.map(p => p.display)
            ].sort(() => 0.5 - Math.random())
        });
    }
    
    // Question 3: Type effectiveness
    const typeEffectiveness = {
        fire: { beats: "grass", weak: "water" },
        water: { beats: "fire", weak: "grass" },
        grass: { beats: "water", weak: "fire" },
        electric: { beats: "water", weak: "grass" },
        psychic: { beats: "fighting", weak: "ghost" },
        ghost: { beats: "psychic", weak: "ghost" }
    };
    
    if (typeEffectiveness[selectedType]) {
        const effectiveness = typeEffectiveness[selectedType];
        const wrongTypes2 = otherTypes.filter(t => t !== effectiveness.beats).slice(0, 3);
        
        questions.push({
            question: `${pokemonData.types[selectedType].name} moves are super effective against which type?`,
            correct: pokemonData.types[effectiveness.beats]?.name || "Fighting Type",
            options: [
                pokemonData.types[effectiveness.beats]?.name || "Fighting Type",
                ...wrongTypes2.map(t => pokemonData.types[t].name)
            ].sort(() => 0.5 - Math.random())
        });
    }
    
    // Question 4: Pokemon identification
    const identifyPokemon = learnedPokemon[Math.floor(Math.random() * learnedPokemon.length)];
    const wrongPokemon2 = learnedPokemon.filter(p => p.name !== identifyPokemon.name).slice(0, 3);
    
    questions.push({
        question: `Which Pokémon is known for moves like ${identifyPokemon.moves.slice(0, 2).join(' and ')}?`,
        correct: identifyPokemon.display,
        options: [
            identifyPokemon.display,
            ...wrongPokemon2.map(p => p.display)
        ].sort(() => 0.5 - Math.random()),
        image: getPokemonSpriteUrl(identifyPokemon.id, false)
    });
    
    // Question 5: Type characteristics
    const typeQuestions = {
        fire: "Fire Pokémon love warm places and can breathe fire!",
        water: "Water Pokémon can swim really fast and shoot water!",
        grass: "Grass Pokémon love sunshine and can control plants!",
        electric: "Electric Pokémon can create lightning and thunder!",
        psychic: "Psychic Pokémon have amazing mental powers!",
        ghost: "Ghost Pokémon can disappear and walk through walls!"
    };
    
    const wrongCharacteristics = Object.keys(typeQuestions)
        .filter(t => t !== selectedType)
        .map(t => typeQuestions[t])
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
    
    questions.push({
        question: `Which statement is true about ${pokemonData.types[selectedType].name} Pokémon?`,
        correct: typeQuestions[selectedType],
        options: [
            typeQuestions[selectedType],
            ...wrongCharacteristics
        ].sort(() => 0.5 - Math.random())
    });
    
    return questions.slice(0, 5); // Return exactly 5 questions
}
