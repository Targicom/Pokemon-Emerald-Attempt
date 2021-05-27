// HealthBars && HP STUFF
var enemyhpbar = document.getElementById("EnemyBar");
var playerhpbar = document.getElementById("PlayerBar");
var hptext = document.getElementById("HP Text");

// ------------- TYPES -----------------
const Type =
{
    NONE: "None",
    NORMAL: "Normal",
    FIRE: "Fire",
    WATER: "Water",
    ELECTRIC: "Electric",
    GRASS: "Grass",
    ICE: "Ice",
    FIGHTING: "Fighting",
    POISON: "Poison",
    GROUND: "Ground",
    FLYING: "Flying",
    PSYCHIC: "Psychic",
    BUG: "Bug",
    ROCK: "Rock",
    GHOST: "Ghost",
    DRAGON: "Dragon",
    DARK: "Dark",
    STEEL: "Steel",
    FAIRY: "Fairy"
}
const Weather =
{
    NONE: "None",
    RAIN: "Rain",
    SUN: "Sunny",
    SANDSTORM: "Sandstorm",
    HAIL: "Hail"
};

// Set Weather
var CurrentWeather = Weather.NONE;

function IsSuperEffective(Type1, Type2, MoveType)
{
    var EffectiveModifier = 0;
    var NotEffectiveMfier = .5;
    var SuperEffectiveMfier = 2;
    var isImmune = false;

    // First One
    switch (Type1)
    {
        case Type.NORMAL:
        {
           switch (MoveType)
           {
               case Type.FIGHTING: EffectiveModifier += SuperEffectiveMfier; break;
               case Type.GHOST: isImmune = true; break;
               default: EffectiveModifier = 1; break;
           }

           break;     
        }
        case Type.FIRE:
        {
            switch (MoveType) 
            {
                case Type.WATER: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.ROCK: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.GROUND: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.GRASS: EffectiveModifier = NotEffectiveMfier; break;
                case Type.FIRE: EffectiveModifier += NotEffectiveMfier; break;
                case Type.ICE: EffectiveModifier += NotEffectiveMfier; break;
                case Type.BUG: EffectiveModifier += NotEffectiveMfier; break;
                case Type.STEEL: EffectiveModifier += NotEffectiveMfier; break;
                case Type.FAIRY: EffectiveModifier += NotEffectiveMfier; break;
                default: EffectiveModifier = 1; break;
            }

            break;
        }
        case Type.WATER:
        {
            switch (MoveType) 
            {
                case Type.ELECTRIC: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.GRASS: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.FIRE: EffectiveModifier += NotEffectiveMfier; break;
                case Type.WATER: EffectiveModifier += NotEffectiveMfier; break;
                case Type.ICE: EffectiveModifier += NotEffectiveMfier; break;
                case Type.STEEL: EffectiveModifier += NotEffectiveMfier; break;      
                default: EffectiveModifier = 1; break;
            }

             break;
        }
        case Type.ELECTRIC:
        {
            switch (MoveType) 
            {
                case Type.GROUND: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.ELECTRIC: EffectiveModifier += NotEffectiveMfier; break;
                case Type.FLYING: EffectiveModifier += NotEffectiveMfier; break;
                case Type.STEEL: EffectiveModifier += NotEffectiveMfier; break;
                default: EffectiveModifier = 1; break;
            }

             break;
            }
        case Type.GRASS:
        {
            switch (MoveType) 
            {
                case Type.FIRE: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.ICE: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.POISON: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.BUG: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.FLYING: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.WATER: EffectiveModifier += NotEffectiveMfier; break;
                case Type.ELECTRIC: EffectiveModifier += NotEffectiveMfier; break;
                case Type.GROUND: EffectiveModifier += NotEffectiveMfier; break;
                default: EffectiveModifier = 1; break;
            }

             break;
            }
        case Type.ICE:
        {
            switch (MoveType) 
            {
                case Type.FIRE: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.FIGHTING: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.ROCK: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.STEEL: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.ICE: EffectiveModifier += NotEffectiveMfier; break;
                default: EffectiveModifier = 1; break;
            }

            break;
        }
        case Type.FIGHTING:
        {
            switch (MoveType) 
            {
                case Type.FLYING: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.PSYCHIC: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.FAIRY: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.BUG: EffectiveModifier += NotEffectiveMfier; break;
                case Type.ROCK: EffectiveModifier += NotEffectiveMfier; break;
                case Type.DARK: EffectiveModifier += NotEffectiveMfier; break;
                default: EffectiveModifier = 1; break;
            }

            break;
            }
        case Type.POISON:
        {
            switch (MoveType) 
            {
                case Type.GROUND: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.PSYCHIC: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.GRASS: EffectiveModifier += NotEffectiveMfier; break;
                case Type.BUG: EffectiveModifier += NotEffectiveMfier; break;
                case Type.FIGHTING: EffectiveModifier += NotEffectiveMfier; break;
                case Type.POISON: EffectiveModifier += NotEffectiveMfier; break;
                case Type.FAIRY: EffectiveModifier += NotEffectiveMfier; break;
                default: EffectiveModifier = 1; break;
            }

            break;
        }
        case Type.GROUND:
        {
            switch (MoveType) 
            {
                case Type.WATER: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.GRASS: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.ICE: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.POISON: EffectiveModifier += NotEffectiveMfier; break;
                case Type.ROCK: EffectiveModifier += NotEffectiveMfier; break;
                case Type.ELECTRIC: isImmune = true; break;
                default: EffectiveModifier = 1; break;
            }

            break;
            }
        case Type.FLYING:
        {
            switch (MoveType) 
            {
                case Type.ELECTRIC: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.ICE: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.ROCK: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.GRASS: EffectiveModifier += NotEffectiveMfier; break;
                case Type.FIGHTING: EffectiveModifier += NotEffectiveMfier; break;
                case Type.BUG: EffectiveModifier += NotEffectiveMfier; break;
                case Type.GROUND: isImmune = true; break;
                default: EffectiveModifier = 1; break;
            }

            break;
            }
        case Type.PSYCHIC:
        {
            switch (MoveType) 
            {
                case Type.BUG: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.GHOST: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.DARK: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.FIGHTING: EffectiveModifier += NotEffectiveMfier; break;
                case Type.PSYCHIC: EffectiveModifier += NotEffectiveMfier; break;
                default: EffectiveModifier = 1; break;
            }

            break;
            }
        case Type.BUG:
        {
            switch (MoveType) 
            {
                case Type.FIRE: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.FLYING: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.ROCK: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.GRASS: EffectiveModifier += NotEffectiveMfier; break;
                case Type.FIGHTING: EffectiveModifier += NotEffectiveMfier; break;
                case Type.GROUND: EffectiveModifier += NotEffectiveMfier; break;
                default: EffectiveModifier = 1; break;
            }

            break;
            }
        case Type.ROCK:
        {
            switch (MoveType) 
            {
                case Type.WATER: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.GRASS: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.FIGHTING: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.GROUND: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.STEEL: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.NORMAL: EffectiveModifier += NotEffectiveMfier; break;
                case Type.FIRE: EffectiveModifier += NotEffectiveMfier; break;
                case Type.POISON: EffectiveModifier += NotEffectiveMfier; break;
                case Type.FLYING: EffectiveModifier += NotEffectiveMfier; break;
                default: EffectiveModifier = 1; break;
            }

            break;
            }
        case Type.GHOST:
        {
            switch (MoveType) 
            {
                case Type.GHOST: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.DARK: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.POISON: EffectiveModifier += NotEffectiveMfier; break;
                case Type.BUG: EffectiveModifier += NotEffectiveMfier; break;
                case Type.NORMAL: isImmune = true;
                case Type.FIGHTING: isImmune = true;
                default: EffectiveModifier = 1; break;
            }

            break;
            }
        case Type.DRAGON:
        {
            switch (MoveType) 
            {
                case Type.DRAGON: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.ICE: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.FAIRY: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.FIRE: EffectiveModifier += NotEffectiveMfier; break;
                case Type.WATER: EffectiveModifier += NotEffectiveMfier; break;
                case Type.ELECTRIC: EffectiveModifier += NotEffectiveMfier; break;
                case Type.GRASS: EffectiveModifier += NotEffectiveMfier; break;
                default: EffectiveModifier = 1; break;
            }

            break;
        }
        case Type.DARK:
        {
            switch (MoveType) 
            {
                case Type.FIGHTING: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.BUG: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.FAIRY: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.GHOST: EffectiveModifier += NotEffectiveMfier; break;
                case Type.DARK: EffectiveModifier += NotEffectiveMfier; break;
                case Type.PSYCHIC: isImmune = true; break;
                default: EffectiveModifier = 1; break;
            }

            break;
            }
        case Type.STEEL:
        {
            switch (MoveType) 
            {
                case Type.FIRE: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.FIGHTING: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.GROUND: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.NORMAL: EffectiveModifier += NotEffectiveMfier; break;
                case Type.GRASS: EffectiveModifier += NotEffectiveMfier; break;
                case Type.ICE: EffectiveModifier += NotEffectiveMfier; break;
                case Type.FLYING: EffectiveModifier += NotEffectiveMfier; break;
                case Type.PSYCHIC: EffectiveModifier += NotEffectiveMfier; break;
                case Type.BUG: EffectiveModifier += NotEffectiveMfier; break;
                case Type.ROCK: EffectiveModifier += NotEffectiveMfier; break;
                case Type.DRAGON: EffectiveModifier += NotEffectiveMfier; break;
                case Type.STEEL: EffectiveModifier += NotEffectiveMfier; break;
                case Type.FAIRY: EffectiveModifier += NotEffectiveMfier; break;
                case Type.POISON: isImmune = true; break;
                default: EffectiveModifier = 1; break;
            }

            break;
            }
        case Type.FAIRY:
        {
            switch (MoveType) 
            {
                case Type.POISON: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.STEEL: EffectiveModifier += SuperEffectiveMfier; break;
                case Type.FIGHTING: EffectiveModifier += NotEffectiveMfier; break;
                case Type.BUG: EffectiveModifier += NotEffectiveMfier; break;
                case Type.DARK: EffectiveModifier += NotEffectiveMfier; break;
                case Type.DRAGON: isImmune = true; break;
                default: EffectiveModifier = 1; break;
            }

            break;
        }
    }

    // If it is immune don't bother with the second typing
    if (isImmune)
        return 0;

    // If There isn't a second typing
    if (Type2 == Type.NONE)
        return EffectiveModifier;

    // Check if it is effective or not and adapt for it
    switch (EffectiveModifier)
    {
        case .5: NotEffectiveMfier = -0.25; SuperEffectiveMfier = .5; break;
        case 1: NotEffectiveMfier = -0.5; SuperEffectiveMfier = 1; break;
        case 2: NotEffectiveMfier = - 1; SuperEffectiveMfier = 2; break;
    }


    switch (Type2)
    {
        case Type.NORMAL:
            {
                switch (MoveType) {
                    case Type.FIGHTING: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.GHOST: isImmune = true; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.FIRE:
            {
                switch (MoveType) {
                    case Type.WATER: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.ROCK: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.GROUND: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.GRASS: EffectiveModifier = NotEffectiveMfier; break;
                    case Type.FIRE: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.ICE: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.BUG: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.STEEL: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.FAIRY: EffectiveModifier += NotEffectiveMfier; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.WATER:
            {
                switch (MoveType) {
                    case Type.ELECTRIC: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.GRASS: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.FIRE: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.WATER: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.ICE: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.STEEL: EffectiveModifier += NotEffectiveMfier; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.ELECTRIC:
            {
                switch (MoveType) {
                    case Type.GROUND: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.ELECTRIC: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.FLYING: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.STEEL: EffectiveModifier += NotEffectiveMfier; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.GRASS:
            {
                switch (MoveType) {
                    case Type.FIRE: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.ICE: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.POISON: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.BUG: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.FLYING: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.WATER: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.ELECTRIC: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.GROUND: EffectiveModifier += NotEffectiveMfier; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.ICE:
            {
                switch (MoveType) {
                    case Type.FIRE: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.FIGHTING: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.ROCK: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.STEEL: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.ICE: EffectiveModifier += NotEffectiveMfier; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.FIGHTING:
            {
                switch (MoveType) {
                    case Type.FLYING: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.PSYCHIC: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.FAIRY: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.BUG: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.ROCK: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.DARK: EffectiveModifier += NotEffectiveMfier; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.POISON:
            {
                switch (MoveType) {
                    case Type.GROUND: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.PSYCHIC: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.GRASS: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.BUG: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.FIGHTING: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.POISON: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.FAIRY: EffectiveModifier += NotEffectiveMfier; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.GROUND:
            {
                switch (MoveType) {
                    case Type.WATER: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.GRASS: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.ICE: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.POISON: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.ROCK: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.ELECTRIC: isImmune = true; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.FLYING:
            {
                switch (MoveType) {
                    case Type.ELECTRIC: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.ICE: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.ROCK: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.GRASS: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.FIGHTING: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.BUG: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.GROUND: isImmune = true; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.PSYCHIC:
            {
                switch (MoveType) {
                    case Type.BUG: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.GHOST: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.DARK: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.FIGHTING: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.PSYCHIC: EffectiveModifier += NotEffectiveMfier; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.BUG:
            {
                switch (MoveType) {
                    case Type.FIRE: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.FLYING: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.ROCK: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.GRASS: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.FIGHTING: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.GROUND: EffectiveModifier += NotEffectiveMfier; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.ROCK:
            {
                switch (MoveType) {
                    case Type.WATER: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.GRASS: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.FIGHTING: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.GROUND: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.STEEL: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.NORMAL: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.FIRE: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.POISON: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.FLYING: EffectiveModifier += NotEffectiveMfier; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.GHOST:
            {
                switch (MoveType) {
                    case Type.GHOST: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.DARK: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.POISON: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.BUG: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.NORMAL: isImmune = true;
                    case Type.FIGHTING: isImmune = true;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.DRAGON:
            {
                switch (MoveType) {
                    case Type.DRAGON: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.ICE: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.FAIRY: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.FIRE: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.WATER: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.ELECTRIC: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.GRASS: EffectiveModifier += NotEffectiveMfier; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.DARK:
            {
                switch (MoveType) {
                    case Type.FIGHTING: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.BUG: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.FAIRY: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.GHOST: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.DARK: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.PSYCHIC: isImmune = true; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.STEEL:
            {
                switch (MoveType) {
                    case Type.FIRE: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.FIGHTING: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.GROUND: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.NORMAL: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.GRASS: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.ICE: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.FLYING: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.PSYCHIC: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.BUG: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.ROCK: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.DRAGON: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.STEEL: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.FAIRY: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.POISON: isImmune = true; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
        case Type.FAIRY:
            {
                switch (MoveType) {
                    case Type.POISON: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.STEEL: EffectiveModifier += SuperEffectiveMfier; break;
                    case Type.FIGHTING: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.BUG: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.DARK: EffectiveModifier += NotEffectiveMfier; break;
                    case Type.DRAGON: isImmune = true; break;
                    default: EffectiveModifier = EffectiveModifier; break;
                }

                break;
            }
    }

    // Maybe the secondary typing is ghost and ur immune
    if (isImmune)
        return 0;

    return EffectiveModifier; // for the damage calc
}

// Classes
class Move
{
    pp = 0;
    constructor(name,power,accuracy,maxpp, TYPE,Physical)
    {
        this.name = name;
        this.power = power;
        this.accuracy = accuracy;
        this.maxpp = maxpp;
        this.pp = maxpp;
        this.TYPE = TYPE;
        this.Physical = Physical;
    }
};
class Pokemon
{
    hp = 0;
    moves = new Array(4);

    constructor(name, maxhp, attack, defense, spattack, spdefense, speed, level, Type1,Type2)
    {
        this.name = name;
        this.maxhp = maxhp;
        this.hp = maxhp;
        this.attack = attack;
        this.defense = defense;
        this.spattack = spattack;
        this.spdefense = spdefense;
        this.speed = speed;
        this.level = level;
        this.Type1 = Type1;
        this.Type2 = Type2;
    }
    AssignMoves(m1,m2,m3,m4)
    {
        this.moves[0] = m1;
        this.moves[1] = m2;
        this.moves[2] = m3;
        this.moves[3] = m4;
    }
    DealDamage(moveIndex)
    {

        // Damage (Targets && Badge && Burn && other are always 1 here, cause status conditions aren't a thing yet. So are double battles)
        // Implement Weather                        
        var STAB = 1;
        var WModifier = 1; // weather
        var TypeModifier = IsSuperEffective(enemy.Type1, enemy.Type2, this.moves[moveIndex].TYPE);

        // STAB
        if (this.Type1 == this.moves[moveIndex].TYPE || this.Type2 == this.moves[moveIndex].TYPE)
            STAB = 1.5;

        if (CurrentWeather != Weather.NONE)
        if (CurrentWeather == Weather.RAIN)
        {
            if (this.moves[moveIndex].TYPE == Type.WATER)
                WModifier = 1.5;
            else if (this.moves[moveIndex].TYPE == Type.FIRE)
                WModifier = 0.5;
        } else if (CurrentWeather == Weather.SUN)
        {
            if (this.moves[moveIndex].TYPE == Type.WATER)
                WModifier = 0.5;
            else if (this.moves[moveIndex].TYPE == Type.FIRE)
                WModifier = 1.5;
        }

        var TotalDamage = 0;

        if (this.moves[moveIndex].Physical)
        {
            TotalDamage = Math.floor(Math.floor(Math.floor(2 * this.level / 5 + 2) * this.moves[moveIndex].power * this.attack / enemy.defense) / 50) + 2;
            TotalDamage *= STAB * WModifier * TypeModifier;
        }
        else
        {
            // Somewhat working but i don't care anymore lol
            TotalDamage = Math.floor(Math.floor(Math.floor(2 * this.level / 5 + 2) * this.moves[moveIndex].power * this.spattack / enemy.spdefense) / 50) + 2;
            TotalDamage *= STAB * WModifier * TypeModifier;
        }

        TotalDamage = Math.floor(TotalDamage);

        // Damage can't be negative 
        console.log(TotalDamage);
        if (TotalDamage < 0)
            TotalDamage = 1;

        if (TotalDamage == 0)
        {
            TSequence("It doesn't affect " + enemy.name + "...");
            return;
        }

        // Graphics
        if (enemy.hp - TotalDamage > 0)
        {
            var endgoal = enemy.hp - TotalDamage;
            var loop = setInterval(function ()
            {
                enemy.hp -= 1;
                enemyhpbar.value = enemy.hp;

                if (enemy.hp == endgoal)
                    clearInterval(loop);

            }, 15);
        } else
        {
            var loop = setInterval(function ()
            {
                enemy.hp -= 1;
                enemyhpbar.value = enemy.hp;


                if (enemy.hp == 0)
                {
                    clearInterval(loop);
                    TSequence(enemy.name + " fainted! #You won! #");
                }

            }, 15);
        }

        // For Time
        return TotalDamage * 15;
    }
    EnemyCalc()
    {
        var highestdmgMove = new Move("", 0, 0, 0, Type.NONE, false);
        for (var i = 0; i < this.moves.length; i++)
        {
            if (this.moves[i].TYPE == this.Type1 || this.moves[i].TYPE == this.Type2)
            {
                var prevAttack = this.moves[i].power;
                this.moves[i].power *= 1.5;
            }


            if (this.moves[i].power > highestdmgMove.power)
            {
                highestdmgMove = this.moves[i];

                if (prevAttack)
                this.moves[i].power = prevAttack;
                continue;
            }
        }

        return highestdmgMove;
    }
    EnemyAttack(selectedMOVE)
    {
        var STAB = 1;
        var WModifier = 1; // weather
        var TypeModifier = IsSuperEffective(player.Type1, player.Type2, selectedMOVE.TYPE);

        if (this.Type1 == selectedMOVE.TYPE || this.Type1 == selectedMOVE.TYPE)
            STAB = 1.5;

        if (CurrentWeather != Weather.NONE)
            if (CurrentWeather == Weather.RAIN)
            {
                if (selectedMOVE.TYPE == Type.WATER)
                    WModifier = 1.5;
                else if (selectedMOVE.TYPE == Type.FIRE)
                    WModifier = 0.5;
            } else if (CurrentWeather == Weather.SUN)
            {
                if (selectedMOVE.TYPE == Type.WATER)
                    WModifier = 0.5;
                else if (selectedMOVE.TYPE == Type.FIRE)
                    WModifier = 1.5;
            }

        var TotalDamage = 0;
        // DAMAAAGEEE
        if (selectedMOVE.Physical)
        {
            TotalDamage = Math.floor(Math.floor(Math.floor(2 * this.level / 5 + 2) * selectedMOVE.power * this.attack / player.defense) / 50) + 2;
            TotalDamage *= STAB * WModifier * TypeModifier;
        }
        else
        {
            TotalDamage = Math.floor(Math.floor(Math.floor(2 * this.level / 5 + 2) * selectedMOVE.power * this.spattack / player.spdefense) / 50) + 2;
            TotalDamage *= STAB * WModifier * TypeModifier; 
        }

        TotalDamage = Math.floor(TotalDamage);

        // Damage can't be negative 
        console.log(TotalDamage);
        if (TotalDamage < 0)
            TotalDamage = 1;

        if (TotalDamage == 0)
        {
            TSequence("It doesn't affect " + player.name + "...");
            return;
        }

        if (player.hp - TotalDamage > 0)
        {
            var endgoal = player.hp - TotalDamage;
            var loop = setInterval(function ()
            {
                player.hp -= 1;
                playerhpbar.value = player.hp;
                hptext.innerHTML = player.hp + "/" + player.maxhp;

                if (player.hp == endgoal)
                    clearInterval(loop);
            }, 15);
        } else
        {
            var loop = setInterval(function ()
            {
                player.hp -= 1;
                playerhpbar.value = player.hp;
                hptext.innerHTML = player.hp + "/" + player.maxhp;

                if (player.hp == 0)
                {
                    clearInterval(loop);
                    TSequence(player.name + " fainted! " + "#" + "You wiped!  #");
                }

            }, 15);
        }

        return TotalDamage * 15;
    }
}

// Select Screen Vars
var textbox = document.getElementById("Game Text");
function TSequence(text)
{
    var TotalTime = 0;
    var arrSize = 0;
    var fuckme = 0;
    for (var z = 0; z < text.length; z++)
    {
        if (text[z] == "#")
            arrSize++;
    }

    if (arrSize == 0)
        arrSize = 1;

    var Sequences = new Array(arrSize);
    for (var z = 0; z < Sequences.length; z++)
    {
        Sequences[z] = "";
    }

    // Calculating Time (Breaks && Text showing up)
    TotalTime += arrSize * 500;
    TotalTime += (text.length - arrSize) * 18; 

    var ItemsIndex = 0;
    for (var y = 0; y < text.length; y++)
    {
        if (text[y] == "#")
        {
            ItemsIndex++;
            continue;
        }

        Sequences[ItemsIndex] += text[y];
    }

    var i = 0;
    var index = 0;
    textbox.innerHTML = "";

    let Loop = setTimeout(function addText()
    {
        if (i == arrSize)
            clearTimeout(Loop);

        if (i < arrSize)
        if (index == Sequences[i].length - 1)
        {
            index = 0;
            i++;

            if (i < arrSize)
            setTimeout(() => textbox.innerHTML = "", 500);
            setTimeout(addText, 500);
            TotalTime += 500;
        } else
        {
            textbox.innerHTML += Sequences[i][index];
            index++;
            TotalTime += 18;
            setTimeout(addText, 18);
        }

    }, 18);

    return TotalTime;
}



// Run Buttons + Box
var Container = document.getElementById("BOX");
var fightButton = document.getElementById("Fight");
var bagButton = document.getElementById("Bag");
var pokemonButton = document.getElementById("Pokemon");
var runButton = document.getElementById("Run");


// Move Buttons
var backButton = document.getElementById("Back");
var MoveContainer = document.getElementById("MoveC"); // container
var move1Button = document.getElementById("Move 1");
var move2Button = document.getElementById("Move 2");
var move3Button = document.getElementById("Move 3");
var move4Button = document.getElementById("Move 4");


// ----- Combat UI Management -----
function ManageUI(Disenable, Containerdis)
{
    fightButton.disabled = Disenable;   
    bagButton.disabled = Disenable;
    pokemonButton.disabled = Disenable;
    runButton.disabled = Disenable;

    // Disable the container if needed
    if (Disenable)
    {
        if (Containerdis)
            Container.style.visibility = "hidden";
    }
     else
        Container.style.visibility = "visible";
    
    
}

function ManageMoves(YayNay)
{
    move1Button.disabled = YayNay;
    move2Button.disabled = YayNay;
    move3Button.disabled = YayNay;
    move4Button.disabled = YayNay;
    backButton.disabled = YayNay;

    if (YayNay)
        MoveContainer.style.visibility = "hidden";
    else
        MoveContainer.style.visibility = "visible";
}

// Player Moves
var pm1 = new Move("Mega Drain", 60, 100, 20, Type.GRASS,false);
var pm2 = new Move("Bubble Beam", 65, 100, 10, Type.WATER,false);
var pm3 = new Move("Hidden Power Psychic", 60, 100, 30, Type.PSYCHIC, false);
var pm4 = new Move("Hidden Power Rock", 60, 100, 15, Type.ROCK, false);

// Enemy Moves
var em1 = new Move("Karate Chop", 45, 100, 25, Type.FIGHTING, true);
var em2 = new Move("Force Palm", 60, 100, 15, Type.FIGHTING, true);
var em3 = new Move("Rock Slide", 80, 90, 10, Type.ROCK, true);
var em4 = new Move("Body Slam", 80, 100, 15, Type.NORMAL, true);

// Initialize Game Objects
var player = new Pokemon("Lotad", 22, 10, 10, 11, 12, 10, 10, Type.WATER, Type.GRASS);
player.AssignMoves(pm1, pm2, pm3, pm4);

var enemy = new Pokemon("Makuhita", 32, 17, 12, 10, 12, 9, 8, Type.FIGHTING, Type.NONE);
enemy.AssignMoves(em1, em2, em3, em4);

// To set all necessary information at the start
function UIStart()
{
    document.getElementById("EnemyName").innerHTML = enemy.name;
    document.getElementById("PlayerName").innerHTML = player.name;
    document.getElementById("EnemyLv").innerHTML = "Lv" + enemy.level;
    document.getElementById("PlayerLv").innerHTML = "Lv" + player.level;

    let WTime = 0;
    if (CurrentWeather != Weather.NONE)
    if (CurrentWeather == Weather.RAIN)
    {
        textbox.style.color = "darkblue";
        WTime = TSequence("It's raining. ");
    } else if (CurrentWeather == Weather.SUN)
    {
        textbox.style.color = "darkred";
        WTime = TSequence("It's sunny. ");
    }

    setTimeout(function ()
    {
        textbox.style.color = "black";
        textbox.innerHTML = "What will " + player.name + " do?", WTime + 150;
    }, WTime + 150)

    // Set HP
    enemyhpbar.max = enemy.maxhp;
    enemyhpbar.value = enemy.hp;
    playerhpbar.max = player.maxhp;
    playerhpbar.value = player.hp;
    hptext.innerHTML = player.hp + "/" + player.maxhp;
}
function GetWeather()
{
    let WAther = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    switch (WAther)
    {
        case 1: CurrentWeather = Weather.NONE; break;
        case 2: CurrentWeather = Weather.RAIN; break;
        case 3: CurrentWeather = Weather.SUN; break;
    }
}
GetWeather();
ManageMoves(true);
UIStart();




// Assign Moves To buttons
move1Button.innerHTML = player.moves[0].name;
move2Button.innerHTML = player.moves[2].name;
move3Button.innerHTML = player.moves[1].name;
move4Button.innerHTML = player.moves[3].name;

// Gameplay!!
function StartTurn(mIndex)
{
    if (player.speed > enemy.speed)
    {
        ManageMoves(true);
        ManageUI(true);

        // Time
        let moveTime = TSequence(player.name + " used " + player.moves[mIndex].name + "! ");
        let pDamageTime = 0;
        let enemymoveTime = 0;
        let eDamageTime = 0;

        setTimeout(function ()
        {
            pDamageTime = player.DealDamage(mIndex);
            let Presult = IsSuperEffective(enemy.Type1, enemy.Type2, player.moves[mIndex].TYPE);
            let WaitTime = 0;

            // Enemy Turn
            if (pDamageTime < enemy.hp * 15)
            {
                if (Presult == 2 || Presult == 4)
                {
                    WaitTime += "It's super effective! ".length * 18 + 350; // 350 is extra time 
                    setTimeout(TSequence, pDamageTime + 150, "It's super effective! ");
                }
                else if (Presult == 0.5 || Presult == 0.25)
                {
                    WaitTime += "It's not very effective... ".length * 18 + 350;
                    setTimeout(TSequence, pDamageTime + 150, "It's not very effective... ");
                }

                setTimeout(function ()
                {
                    enemymoveTime = TSequence(enemy.name + " used " + enemy.EnemyCalc().name + "! ");

                    setTimeout(function ()
                    {
                        eDamageTime = enemy.EnemyAttack(enemy.EnemyCalc());


                        // End Turn
                        if (eDamageTime < player.hp * 15)
                        {
                           setTimeout(function ()
                           {
                                   let WTime = 0;
                                    if (CurrentWeather != Weather.NONE)
                                    if (CurrentWeather == Weather.RAIN)
                                    {
                                        textbox.style.color = "darkblue";
                                         WTime = TSequence("Rain continues to fall. ");
                                    } else if (CurrentWeather == Weather.SUN)
                                    {
                                        textbox.style.color = "darkred";
                                        WTime = TSequence("The sunlight is harsh. ");
                                    }   


                                setTimeout(function ()
                                {
                                   textbox.style.color = "black";
                                   ManageUI(false);
                                   textbox.innerHTML = "What will " + player.name + " do?";
                                }, WTime + 150)
                           }, eDamageTime + 100);
                        }
                    }, enemymoveTime);

                }, WaitTime + 400)
            }
        }, moveTime);
    } else if (player.speed == enemy.speed)
    {
        let SpeedTie = Math.round(Math.random());
        if (SpeedTie == 0)
        {
            ManageMoves(true);
            ManageUI(true);

            // Time
            let moveTime = TSequence(player.name + " used " + player.moves[mIndex].name + "! ");
            let pDamageTime = 0;
            let enemymoveTime = 0;
            let eDamageTime = 0;

            setTimeout(function () {
                pDamageTime = player.DealDamage(mIndex);
                let Presult = IsSuperEffective(enemy.Type1, enemy.Type2, player.moves[mIndex].TYPE);
                let WaitTime = 0;

                // Enemy Turn
                if (pDamageTime < enemy.hp * 15) {
                    if (Presult == 2 || Presult == 4) {
                        WaitTime += "It's super effective! ".length * 18 + 350; // 350 is extra time 
                        setTimeout(TSequence, pDamageTime + 150, "It's super effective! ");
                    }
                    else if (Presult == 0.5 || Presult == 0.25) {
                        WaitTime += "It's not very effective... ".length * 18 + 350;
                        setTimeout(TSequence, pDamageTime + 150, "It's not very effective... ");
                    }

                    setTimeout(function () {
                        enemymoveTime = TSequence(enemy.name + " used " + enemy.EnemyCalc().name + "! ");

                        setTimeout(function () {
                            eDamageTime = enemy.EnemyAttack(enemy.EnemyCalc());


                            // End Turn
                            if (eDamageTime < player.hp * 15) {
                                setTimeout(function () {
                                    ManageUI(false);
                                    textbox.innerHTML = "What will " + player.name + " do?";
                                }, eDamageTime + 100);
                            }
                        }, enemymoveTime);

                    }, WaitTime + 400)
                }
            }, moveTime);
        } else
        {
            ManageUI(true);
        ManageMoves(true);
        let enemymoveTime = TSequence(enemy.name + " used " + enemy.EnemyCalc().name + "! ");
        let eDamageTime = 0;
        let pMoveTime = 0;
        let pDamageTime = 0;


        var bestMove = enemy.EnemyCalc();

        setTimeout(function ()
        {
            eDamageTime = enemy.EnemyAttack(bestMove);
            let Presult = IsSuperEffective(player.Type1, player.Type2, bestMove.TYPE);
            let WaitTime = 0;

            // If you didn't kill the guy, continue with the rest of the turn
            if (eDamageTime < player.hp * 15)
            {
                if (Presult == 2 || Presult == 4)
                {
                    WaitTime += "It's super effective! ".length * 18 + 350; // 350 is extra time 
                    setTimeout(TSequence, eDamageTime + 150, "It's super effective! ");
                }
                else if (Presult == 0.5 || Presult == 0.25)
                {
                    WaitTime += "It's not very effective... ".length * 18 + 350;
                    setTimeout(TSequence, eDamageTime + 150, "It's not very effective... ");
                }

                // Player Turn
                setTimeout(function ()
                {
                    pMoveTime = TSequence(player.name + " used " + player.moves[mIndex].name + "! ");

                    // Player Attack
                    setTimeout(function ()
                    {
                        pDamageTime = player.DealDamage(mIndex);

                        if (pDamageTime < enemy.hp * 15)
                        {
                           setTimeout(function ()
                           {
                               let WTime = 0;
                               if (CurrentWeather != Weather.NONE)
                               if (CurrentWeather == Weather.RAIN)
                               {
                                   textbox.style.color = "darkblue";
                                   WTime = TSequence("Rain continues to fall. ");
                               } else if (CurrentWeather == Weather.SUN)
                               {
                                   textbox.style.color = "darkred";
                                   WTime = TSequence("The sunlight is harsh. ");
                               }


                               setTimeout(function ()
                               {
                                   textbox.style.color = "black";
                                   ManageUI(false);
                                   textbox.innerHTML = "What will " + player.name + " do?";
                               }, WTime + 150)

                           }, pDamageTime + 100);
                        }
                    }, pMoveTime)

                }, WaitTime + 400)
            }

        }, enemymoveTime)
        }

    }
    else
    {
        ManageUI(true);
        ManageMoves(true);
        let enemymoveTime = TSequence(enemy.name + " used " + enemy.EnemyCalc().name + "! ");
        let eDamageTime = 0;
        let pMoveTime = 0;
        let pDamageTime = 0;


        var bestMove = enemy.EnemyCalc();



        setTimeout(function ()
        {
            eDamageTime = enemy.EnemyAttack(bestMove);
            let Presult = IsSuperEffective(player.Type1, player.Type2, bestMove.TYPE);
            let WaitTime = 0;

            // If you didn't kill the guy, continue with the rest of the turn
            if (eDamageTime < player.hp * 15)
            {
                if (Presult == 2 || Presult == 4)
                {
                    WaitTime += "It's super effective! ".length * 18 + 350; // 350 is extra time 
                    setTimeout(TSequence, eDamageTime + 150, "It's super effective! ");
                }
                else if (Presult == 0.5 || Presult == 0.25)
                {
                    WaitTime += "It's not very effective... ".length * 18 + 350;
                    setTimeout(TSequence, eDamageTime + 150, "It's not very effective... ");
                }

                // Player Turn
                setTimeout(function ()
                {
                    pMoveTime = TSequence(player.name + " used " + player.moves[mIndex].name + "! ");

                    // Player Attack
                    setTimeout(function ()
                    {
                        pDamageTime = player.DealDamage(mIndex);

                        if (pDamageTime < enemy.hp * 15)
                        {
                           setTimeout(function ()
                           {
                               let WTime = 0;
                               if (CurrentWeather != Weather.NONE)
                               if (CurrentWeather == Weather.RAIN)
                               {
                                   textbox.style.color = "darkblue";
                                   WTime = TSequence("Rain continues to fall. ");
                               } else if (CurrentWeather == Weather.SUN)
                               {
                                   textbox.style.color = "darkred";
                                   WTime = TSequence("The sunlight is harsh. ");
                               }


                               setTimeout(function ()
                               {
                                   textbox.style.color = "black";
                                   ManageUI(false);
                                   textbox.innerHTML = "What will " + player.name + " do?";
                               }, WTime + 150)

                           }, pDamageTime + 100);
                        }
                    }, pMoveTime)

                }, WaitTime + 400)
            }

        }, enemymoveTime)
    }
}