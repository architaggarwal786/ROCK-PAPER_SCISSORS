 <script>
      let w = 0;
      let l = 0;
      let users = document.querySelector("#user");
      let comps = document.querySelector("#comp");
      let resets = document.querySelector(".reset");
      let choices = document.querySelectorAll(".choice");
      let msgs = document.querySelector("#msg");

      choices.forEach((choice) => {
        choice.addEventListener("click", () => {
          const userchoice = choice.getAttribute("id");
          plaG(userchoice);
        });
      });
      const res = () => {
        users.innerText = 0;
        comps.innerText = 0;
        w = 0;
        l = 0;
        msgs.innerText = "START";
        msgs.style.color = "white";
      };

      resets.addEventListener("click", res);

      const dg = () => {
        msgs.innerText = "Game was Draw";
        msgs.style.color = "yellow";
      };
      const showW = (uw, userchoice, cc) => {
        if (uw) {
          msgs.innerText = `YOU WIN!${userchoice} beats ${cc}`;
          msgs.style.color = "lightgreen";

          w++;
        } else {
          msgs.innerText = `YOU LOSE, ${cc} beats ${userchoice}`;
          msgs.style.color = "red";

          l++;
        }
        users.innerText = w;
        comps.innerText = l;
      };

      const plaG = (userchoice) => {
        const cc = compchoice();
        if (userchoice === cc) {
          dg();
        } else {
          let uw = true;
          if (userchoice === "rock") {
            uw = cc === "paper" ? false : true;
          } else if (userchoice === "paper") {
            uw = cc === "scissors" ? false : true;
          } else {
            uw = cc === "rock" ? false : true;
          }

          showW(uw, userchoice, cc);
        }
      };
      const compchoice = () => {
        const ch = ["rock", "paper", "scissors"];
        let radi = Math.floor(Math.random() * 3);
        return ch[radi];
      };
    </script>
