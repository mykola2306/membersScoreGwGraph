var pointsMissed = 0;
var numPlayersBad = 0;
var dataFromTextFile;
var numOf98 = 0;
var myScores = "";
var members = [];


function LoadFile() {
    var oFrame = document.getElementById("frmFile");
    strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;


    var lines = strRawContents.split("\n");
    //console.log(lines);
    var lastOccOfName = 0;
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].lastIndexOf("Name") == 0) {
            lastOccOfName = i;
        }
    }
    // console.log(lastOccOfName);
    // console.log(lines[lastOccOfName]);
    var allMembers = [];
    for (var i = lastOccOfName + 1; i < lines.length - 1; i++) {
        var lineOf = lines[i];
        lineOf = lineOf.replace(/\t+/g, '|');
        lineOf = lineOf.replace(/ +/g, '|');
        lineOf = lineOf.split("|");
        //allMembers.push(lineOf[0]);
        allMembers += "\"" + lineOf[0] + "\", ";
    }
    // console.log(lastOccOfName);
    // console.log("////////");
    // console.log(allMembers);
    // console.log("////////");
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf("мц") >= 0) {
        }
    }
    // console.log("====== " + numOf98 + " ======");
    // console.log(myScores);
    // console.log(" ========== AFTER ==========");


    var allUsers = ["pak0pak", "Crazy-men", "mykola9824", "kukser", "Cherednychenko", "var.as", "Demon.666", "IIcUxoBaNuu", "злойприк", "Tapaкан", "Суворов7", "мцырь", "явас", "igor.b.", "хХхВанях", "Vladimir_4195", "Хутин.Пу�", "balistik", "cheeznic", "Iron30", "andrysmith", "Rostislav185", "diamm", "pathogenUS", "nag1bat0r", "Beer4uk", "a_palya", "Mifestovel", "hol@vn", "dkfifj", "hpekmek", "iron_force_ua", "SSHADOW333", "Ben_ten", "Yakub", "DorianImortal", "макс19912011", "zddok", "ZBIG82", "Даня.ua", "Elena_arz", "каак", "hfffg", "Alastyel", "Рrіzrak", "-=чикабум", "11cc11", "(Ілідан)"];
    //allMembers="mykola9824"
    //var allUsers = [allMembers];
    //console.log(allMembers);
    //var allUsers = ["mykola9824", "Demon", "cheeznic", "мцырь", "pak0pak", "Crazy-men", "kukser", "Cherednychenko", "var.as", "IIcUxoBaNuu", "злойприк", "Tapaкан", "Суворов7", "явас", "igor.b.", "хХхВанях", "hfffg"];
    for (var j = 0; j < allUsers.length; j++) {
        var userName = allUsers[j];
        var times = [];
        var userScore = ["0"];
        var timesInc = 0;
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].indexOf(allUsers[j]) >= 0) {
                var lineOf = lines[i];
                lineOf = lineOf.replace(/\t+/g, '|');
                lineOf = lineOf.replace(/ +/g, '|');
                lineOf = lineOf.split("|");
                myScores += lines[i][2] + ", ";
                if (lineOf[2] < 4000) {
                    userScore.push(lineOf[2]);
                    times.push(++timesInc);
                }
                numOf98++;
            }
        }
        members.push({
            x: times,
            y: userScore,
            name: userName,
            mode: 'lines',
            line: {
                shape: 'spline'
            },
            type: 'scatter'
        })
        //                console.log(userName);
        //                console.log(userScore);
    }
    //console.log(members);

    //            var data = [trace1, trace2, trace3, trace4];
    //var data = [members[0],members[1]];
    var data = members;
    Plotly.newPlot('tester3', data);

    TESTER2 = document.getElementById('tester2');
    Plotly.plot(TESTER2, [members], {
        margin: {
            t: 0
        }
    });
}