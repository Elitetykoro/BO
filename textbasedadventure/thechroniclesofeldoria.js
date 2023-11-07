const prompt = require('prompt-sync')();

start()
function start(ans){
    console.log("The Chronicles of Eldoria")
    ans = prompt()
if (ans != "mnbvftyuio"){
    console.log("The Prologue In the kingdom of Eldoria, a land of magic and mystery, you, a humble peasant, \nare thrust into a grand adventure when you discover an ancient amulet in a dusty old chest.")
    ans = prompt()
    if (ans != "fkjhcj"){
        console.log("The Mysterious Amulet. As you examine the amulet, you realize it's no ordinary trinket. \nIt holds a hidden power. You must decide how to unlock its potential:")
        Chapter1()
    }
}
}
function Chapter1(ans){
    console.log("   1: Wear the amulet.\n   2: Stand still and feel the ominous gaze of the amulet.")
    ans = prompt()
    if (ans == "1"){
        Chapter3()
    }
    if (ans == "2"){
        Chapter5()
    }
}
function Chapter3(ans){
    console.log("The amulet has lent you its power. You feel energized, you feel strong. \nIt feels like you can punch a cement wall with ease.")
    ans = prompt()
    if (ans != "bwedbvllllvs"){
        console.log("   1: Punch the cement wall.\n   2: Leave the wall alone.")
        ans = prompt()
        if (ans == "1"){
            Chapter4()
        }
        if (ans == "2"){
            Chapter5()
        }
    }
}
function Chapter4(ans){
    console.log("As you punch the cement wall you feel every bone in your body break. You pass out.")
    ans = prompt()
    if (ans != "sdfcdscggrhjkl"){
        Chapter6()
    }
}

function Chapter5(ans){
    console.log("You hear gears shifting, the walls are moving closer. You cannot escape. \nThe walls are crushing you so much that you eventually pass out.")
    ans = prompt()
    if (ans != "sdfggascrhjkl"){
        Chapter6()
    }
}

function Chapter6(ans){
    console.log("You wake up in a village on a bed, With the amulet around your neck.")
    ans = prompt()
    if (ans != "bwedbvllllvs"){
        console.log("   1: Try to take the amulet off.\n   2: Rest for a while.")
        ans = prompt()
        if (ans == "1"){
            Chapter7()
        }
        if (ans == "2"){
            Chapter8()
        }
    }
}
function Chapter7(ans){
    console.log("You hear a weird voice saying “No don't!”. The amulet is stuck to your body.")
    ans = prompt()
    if (ans != "sdfggascyrhjkl"){
        Chapter8()
    }
}
function Chapter8(ans){
    console.log(" A person walks in. “OMG The Chosen One, he is awake!!!”")
    ans = prompt()
    if (ans != "sdfggadcfscyrhjkl"){
        Chapter9()
    }
}
function Chapter9(ans){
    console.log("The village elder walks in. “Greetings stranger”")
    ans = prompt()
    if (ans != "bwedbvledcvlllvs"){
        console.log("   1: Uhm hi?\n   2: Where am I?")
        ans = prompt()
        if (ans == "1"){
            Chapter10()
        }
        if (ans == "2"){
            Chapter10()
        }
    }
}
function Chapter10(ans){
    console.log("Village Elder: “You are in the beautiful land of Eldoria, a magical place. \nMy name is luang fou. And you have been chosen by our magical trinket, our most prized possession, The Amulet of Power.”")
    if (ans != "bwedbvledcvlllvs"){
        console.log("   1: What?\n   2: Punch the Village Elder.")
        ans = prompt()
        if (ans == "1"){
            Chapter11()
        }
        if (ans == "2"){
            Ending1()
        }
    }
}
function Chapter11(ans){
    console.log("Village Elder: “You are the chosen one! But you will have to learn how to control the powers of the amulet. \nIf you dont do this the amulet will consume you and torture you for eternity.”")
    if (ans != "bwedbvledcvlllvs"){
        console.log("   1: Consume me?!?\n   2: Torture me!?!")
        ans = prompt()
        if (ans == "1"){
            Chapter12()
        }
        if (ans == "2"){
            Chapter12()
        }
    }
}
function Chapter12(ans){
    console.log("Village Elder: “Yes but you do not need to worry. We have trained for this moment for more than a 1000 years. \nYou will receive special training from yours truly.”")
    if (ans != "bwedbvledcvlllvs"){
        console.log("   1: You are gonna train me?\n   2: Okay let's begin!")
        ans = prompt()
        if (ans == "1"){
            Chapter13()
        }
        if (ans == "2"){
            Chapter14()
        }
    }
}
function Chapter13(ans){
    console.log("Village Elder: “Yes I will, I have been trained to guide the chosen one. \nDo you accept it?”")
    if (ans != "bwedbvledcvlllvs"){
        console.log("   1: Yes.\n   2: No.")
        ans = prompt()
        if (ans == "1"){
            Chapter14()
        }
        if (ans == "2"){
            Ending2()
        }
    }
}
function Chapter14(ans){
    console.log("Village Elder: 'Alright let's begin'")
    ans = prompt()
    Chapter15()
}
function Chapter15(ans){
    console.log("You begin training with master Luang Fou. Suddenly a fight breaks out. \nYou hear goblins growling from the bushes.")
    if (ans != "bwedbvledcvlllvs"){
        console.log("   1: Go to the goblins\n   2: Alert the Village Elder")
        ans = prompt()
        if (ans == "1"){
            Chapter17()
        }
        if (ans == "2"){
            Chapter16()
        }
    }
}
function Chapter16(ans){
    console.log("Village Elder: “Goblins, we haven't seen them for years. We thought we never had to deal with them again. \nBut this is a good opportunity to test your training.”")
        ans = prompt()
        Chapter17()
}
function Chapter17(ans){
    console.log("You fight the goblins for a while, but they keep increasing their numbers. ")
    if (ans != "bwedbvledcvlllvs"){
        console.log("   1: Keep fighting\n   2: Run away for help")
        ans = prompt()
        if (ans == "1"){
            Ending3()
        }
        if (ans == "2"){
            Chapter18()
        }
    }
}
function Chapter18(ans){
    console.log("You run back to the village. You tell the Village elder that there are too many of them. \nYou tell them that they need to run.")
    ans = prompt()
    Chapter19()
}
function Chapter19(ans){
    console.log("The goblins overwhelm everyone there are thousands of goblins everywhere. \nThey have surrounded the village. \nThey have set the village on fire. There is nowhere to run. \nYou try to stop the goblins, but it's no use. \nNobody survived. Everybody dies. ")
    ans = prompt()
}
function Ending1(){
    console.log("The village elder strikes you with a mighty blow sending you straight to heaven")
}
function Ending2(){
    console.log("NO oh oke well than we need to sacrifice you to the volcano. You get sacrificed into the volcano.")
}
function Ending3(){
    console.log("You keep fighting but there are too many. A gobline scratched your skin. Another goblin slashes you with a poison knife. You did not survive the poison")
}