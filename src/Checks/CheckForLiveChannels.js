const data = require("../Data/SavedData")
const chalk = require("chalk");
const {statuscheckboolean, ciEquals} = require("../functions/util")

let i = 0;

async function CheckForLiveChannels(removeurl) {
    data.choi = [];
    console.log(" ")
    console.log(chalk.gray("Checking for Live Channels"))

    if (statuscheckboolean(data.Drop1.Status)) {
        data.choi.push(data.Drop1.Name)
    }
    if (statuscheckboolean(data.Drop2.Status)) {
        data.choi.push(data.Drop2.Name)
    }
    if (statuscheckboolean(data.Drop3.Status)) {
        data.choi.push(data.Drop3.Name)
    }
    if (statuscheckboolean(data.Drop4.Status)) {
        data.choi.push(data.Drop4.Name)
    }
    if (statuscheckboolean(data.Drop5.Status)) {
        data.choi.push(data.Drop5.Name)
    }
    if (statuscheckboolean(data.Drop6.Status)) {
        data.choi.push(data.Drop6.Name)
    }
    if (statuscheckboolean(data.Drop7.Status)) {
        data.choi.push(data.Drop7.Name)
    }
    if (statuscheckboolean(data.Drop8.Status)) {
        data.choi.push(data.Drop8.Name)
    }
    //if (statuscheckboolean(data.Drop9.Status)) {
      //  data.choi.push(data.Drop9.Name)
   // }

    async function removewatching() {
        if (removeurl !== undefined) {

            for (let i = 0; i < data.choi.length; i++)
            {
                if (ciEquals(data.choi[i], removeurl)) {
                    return [data.choi.splice(i, 1), i--];

                }
            }

        }
    }

    await removewatching();

    async function alloffline() {
            if (ciEquals(data.Drop1.Status, "Offline") && ciEquals(data.Drop2.Status, "Offline") && ciEquals(data.Drop3.Status, "Offline") && ciEquals(data.Drop4.Status, "Offline") && ciEquals(data.Drop5.Status, "Offline") && ciEquals(data.Drop6.Status, "Offline") && ciEquals(data.Drop7.Status, "Offline") && ciEquals(data.Drop8.Status, "Offline") ) {
                data.choi = [];
                data.choi.push(data.Drop1.Name)
                data.choi.push(data.Drop2.Name)
                data.choi.push(data.Drop3.Name)
                data.choi.push(data.Drop4.Name)
                data.choi.push(data.Drop5.Name)
                data.choi.push(data.Drop6.Name)
                data.choi.push(data.Drop7.Name)
                data.choi.push(data.Drop8.Name)
                //data.choi.push(data.Drop9.Name)
                if (i === 0) {
                    console.log(" ")
                    console.log(chalk.magenta("All Channels Offline... Select any Channel to start..."))
                    i++
                }
            }
    }

    await alloffline();


}

module.exports = {
    CheckForLiveChannels
}
