/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */
window.onload = function() {
  const roader = document.querySelectorAll(".roading");
  function hideRoader() {
    roader.forEach(item => {
      item.style.display = "none";
    });
  }

  hideRoader();

  const gameLoad = document.getElementById("gameLoad");
  const bestLoad = document.getElementById("bestLoad");
  const musicLoad = document.getElementById("musicLoad");

  if (bestLoad) {
    const sceneWrapper = document.getElementById("jsSceneWrapper");
    const gifWrapper = document.getElementById("jsGifWrapper");
    const choiceWrapper = document.getElementById("jsChoiceWrapper");
    const gifBtn = document.querySelector(".gif-btn");
    const imageBtn = document.querySelector(".image-btn");

    gifBtn.addEventListener("click", function() {
      hideChoiceBoard();
      gifWrapper.classList.replace("hide", "show");
    });

    imageBtn.addEventListener("click", function() {
      hideChoiceBoard();
      sceneWrapper.classList.replace("hide", "show");
    });

    function hideChoiceBoard() {
      choiceWrapper.classList.replace("choice-wrapper", "hide");

      const switchBtn = document.createElement("div");
      switchBtn.className = "switch-btn";
      document.body.appendChild(switchBtn);
      switchBtn.innerText = "Change List!";
      switchBtn.style.fontSize = "13px";

      switchBtn.addEventListener("click", function() {
        if (sceneWrapper.classList.contains("show")) {
          sceneWrapper.classList.replace("show", "hide");
          gifWrapper.classList.replace("hide", "show");
          switchBtn.innerText = "Wanna see Images?";
        } else {
          sceneWrapper.classList.replace("hide", "show");
          gifWrapper.classList.replace("show", "hide");
          switchBtn.innerText = "Wanna see Gif?";
        }
      });
    }

    if (gifWrapper) {
      const bestSrcBackup = [
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FEVACm%2FbtqBuvREmHI%2FojtWhEZ5E9fcCIYPpeSuLk%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdVOXoN%2FbtqBtNy0VPd%2FlyqRUkOpL02aMiBdK0IBJk%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FDtsJP%2FbtqBtMNGrTW%2FFmblNrDQzqFHWXyLTTDx81%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdU6b15%2FbtqBn9f2IVl%2FGxVyQuaAqyNnjCUGpZkfvK%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FGQjwE%2FbtqBuQabdus%2Fel5gAN4H8dvUVYleptIUr1%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdPCXZq%2FbtqBkpj6K1W%2F4VEHhnEqCDKkSKp5cQRLt1%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FemZChG%2FbtqByFTiBT2%2F48c4vsJniHhXuS2K4xIkq0%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdEdNaH%2FbtqBuaULD3A%2FrZPGzRycLdQ2sOMrbRa69K%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FsV0eI%2FbtqBvukqTUx%2FY1sd0TmHLxsuSpyGCQ5gb1%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FB95Nx%2FbtqBtLVrsML%2FObPzf6QXYKnhP1bsNaCDKk%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcV5jAh%2FbtqBjA7Ldp9%2FujbNAgViJ6rzBGAY1v8Lok%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FS5oKe%2FbtqBubsAdO1%2FSwHxu935rtSRs6jOrRl5Ek%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fb6Rzcp%2FbtqBtXBqHsQ%2Fvs3RT1LrBuVIeK0zLShDW0%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcNc0KJ%2FbtqBtXuA7cz%2FLFAIjEibHmEzZtMdrVvYIk%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FsYwHL%2FbtqBtL2hkZ4%2FElyOI1cykeK2d4L5hH3TU0%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbaJYRr%2FbtqBxBjjFtD%2FA8iCZbalGNk6BEydgWXDKk%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fbp3opu%2FbtqBtLVrvAx%2FZXcUDvNRQ58oi5SJs66zF1%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F6dN6h%2FbtqBlikwbHP%2F0Vks5pN2ePJ9QmotXUKgiK%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbVmcwb%2FbtqBuiE1UA6%2FjIYSObOSkCZPoI3SQ4VO61%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FZP25y%2FbtqBtXnLBdj%2FuxuPeANT9LrexEapNFSlZ1%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fc6lxVF%2FbtqBkNdW1Zs%2Fo9Yg1Td4TrMe3KwmMnnID0%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FP6Kab%2FbtqBtM7SC4S%2FEL6NaAvxyteqUpEbmPy9aK%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fb8vOw7%2FbtqBuiE2dFL%2F8TX8uD9ix3hDR2HwC34ECk%2Fimg.gif"
      ];
      const bestSrc = bestSrcBackup.slice();
      let bestSrcUse = [];

      function shuffleSrc() {
        for (var i = 0; bestSrc.length > 0; i += 1) {
          bestSrcUse = bestSrcUse.concat(bestSrc.splice(Math.floor, 1));
        }
      }

      const sceneBox = document.createElement("div");
      sceneBox.className = "scene-box";
      gifWrapper.appendChild(sceneBox);

      const viewBoard = document.createElement("div");
      viewBoard.className = "view-board";
      const viewLeft = document.createElement("a");
      viewLeft.className = "view-left";
      const viewRight = document.createElement("a");
      viewRight.className = "view-right";

      const viewVer = document.createElement("div");
      viewVer.className = "veiw-ver";

      viewVer.appendChild(viewLeft);
      viewVer.appendChild(viewRight);
      viewBoard.appendChild(viewVer);
      gifWrapper.appendChild(viewBoard);

      viewLeft.addEventListener("click", function() {
        const targetStr = viewVer.style.backgroundImage;
        const splitUrl = targetStr.split(".");
        const extractedUrl = splitUrl[4];
        const currentBackUrl = `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.${extractedUrl}.gif`;
        const c = bestSrcUse.indexOf(currentBackUrl);
        if (c === 0) {
          viewVer.style.backgroundImage = `url(${
            bestSrcUse[bestSrcUse.length - 1]
          })`;
        } else {
          viewVer.style.backgroundImage = `url(${bestSrcUse[c - 1]})`;
        }
      });

      viewRight.addEventListener("click", function() {
        const targetStr = viewVer.style.backgroundImage;
        const splitUrl = targetStr.split(".");
        const extractedUrl = splitUrl[4];
        const currentBackUrl = `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.${extractedUrl}.gif`;
        const c = bestSrcUse.indexOf(currentBackUrl);
        if (c === bestSrcUse.length - 1) {
          viewVer.style.backgroundImage = `url(${bestSrcUse[0]})`;
        } else {
          viewVer.style.backgroundImage = `url(${bestSrcUse[c + 1]})`;
        }
      });

      function bestListSet() {
        for (var i = 0; i < bestSrc.length; i += 1) {
          const bestDiv = document.createElement("div");
          bestDiv.className = "best-gifs";
          const bestInnerTxt = document.createElement("span");
          bestInnerTxt.className = "bests__txt";
          bestDiv.appendChild(bestInnerTxt);
          sceneBox.appendChild(bestDiv);
        }
      }
      bestListSet();
      shuffleSrc();
      const bestDivs = document.querySelectorAll(".best-gifs");
      bestDivs.forEach((item, i) => {
        item.id = i + 1;
        item.style.backgroundImage = `url(${bestSrcUse[i]})`;
        viewVer.style.backgroundImage = `url(${bestSrcUse[0]})`;
      });
      bestDivs.forEach(item => {
        item.addEventListener("click", function() {
          if (viewVer.style.backgroundImage !== "none") {
            viewVer.style.backgroundImage = "none";
          }
          let n = item.id - 1;
          viewVer.style.backgroundImage = `url(${bestSrcUse[n]})`;
        });
      });
    }
    if (sceneWrapper) {
      const bestSrcBackup = [
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FnCN3l%2FbtqBtL1zWrg%2Ft247v5WCvapbMVYKfPVS21%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdainJq%2FbtqBtFgeU9y%2FUDZ9rjvq9kcaCK8phkEPX0%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FduIHCG%2FbtqBs1cJNG2%2F0PPbwKnht8WjUVuyk02iT0%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fb1fD5R%2FbtqBuPBHeF3%2FGhsAQIMPjVNGsmfgHT8drK%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FDz07U%2FbtqBtXHsyuW%2FK4xS1sECPijR0mdL0tEo61%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbFaVDv%2FbtqBuvKda84%2FtR2nCpCbsbUbpiLHumMKwK%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcAnbIi%2FbtqBtFmZANw%2F4i29L8F5VfZyBHeVxWZqJ0%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F6upVo%2FbtqBeAfbHKu%2FHXgHJxTAwh8e0pq1ZF1AA1%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbuSatn%2FbtqBtMTIph8%2FoiSFg72lzK3ZdXQLkAGtek%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FpRuu0%2FbtqBujcb7gS%2FpHX0nNYVWmMLvieTcWfHKk%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FnRLeM%2FbtqBs1DOQfG%2FlcK1Jz1ogK5BcVysEyFb30%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcyXb52%2FbtqBtLN0vZB%2FuYOsSR87nyW3OLZgK859R0%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FmclJw%2FbtqBvsUsGz6%2FwSNlKJ9VhEy2AzT1pVHxX0%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbESnIT%2FbtqBtYG09BJ%2Fc8pEzacKLczbBDuWKbrkK1%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FAOhsX%2FbtqBuxvbk9A%2FhWjfJIn4Kkpu7UrsobXaUK%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F2p6C6%2FbtqBzip1v8o%2F988NFBkOGKqngUA7TFkllK%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcIcAfG%2FbtqBuwJOkfG%2FsLn8sCOjF3adlusOkG1kZk%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FuC8CE%2FbtqBua8jyWx%2FbeUeAOHDSs4SPTdf2lf2B0%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FefkN5Y%2FbtqBzjboKsW%2F5sTGUlQRFJc2Xg5lPzKv6K%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F1wI8W%2FbtqBeTrHxdG%2F6ylKqWpSFd0mGKSvrhdv01%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F8VbMb%2FbtqBvsNF7xy%2Fx3akdQvR50Ntwefczsnkgk%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FVRsm9%2FbtqBuwpvRjt%2FyGkLqzedKrmM71eMD26kMK%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fc3nxZT%2FbtqBzjvHKGx%2FJXBjNA3nOjMXvskcR4OlA1%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F1OuVL%2FbtqBf3HlhXR%2FEbp15VoMiRlqTwQQv2QOLK%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fb9Wlu2%2FbtqBzknQbe8%2Fo8ilfbZTYspafd9EpmKPpK%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdWxZhG%2FbtqBuPoPK4h%2F4vkBlFPndoMITjaFEbysuk%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdfWyYe%2FbtqBtYG1blC%2F8mWzK1k2EXI7IaWknitHG1%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcnY430%2FbtqBuQ86nNy%2FJLpUMjSiElYEasi0wy27ZK%2Fimg.png",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FmjiAp%2FbtqBvsGTzCN%2FEklRMV7v88iQtK7lHNP21K%2Fimg.png"
      ];
      const bestSrc = bestSrcBackup.slice();
      let bestSrcUse = [];

      function shuffleSrc() {
        for (var i = 0; bestSrc.length > 0; i += 1) {
          bestSrcUse = bestSrcUse.concat(bestSrc.splice(Math.floor, 1));
        }
      }

      const sceneBox = document.createElement("div");
      sceneBox.className = "scene-box";
      sceneWrapper.appendChild(sceneBox);

      const viewBoard = document.createElement("div");
      viewBoard.className = "view-board";
      const viewVer = document.createElement("div");
      viewVer.className = "veiw-ver";
      const viewLeft = document.createElement("a");
      viewLeft.className = "view-left";
      const viewRight = document.createElement("a");
      viewRight.className = "view-right";

      viewVer.appendChild(viewLeft);
      viewVer.appendChild(viewRight);
      viewBoard.appendChild(viewVer);
      sceneWrapper.appendChild(viewBoard);

      viewLeft.addEventListener("click", function() {
        const targetStr = viewVer.style.backgroundImage;
        const splitUrl = targetStr.split(".");
        const extractedUrl = splitUrl[4];
        const currentBackUrl = `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.${extractedUrl}.png`;
        const c = bestSrcUse.indexOf(currentBackUrl);
        if (c === 0) {
          viewVer.style.backgroundImage = `url(${
            bestSrcUse[bestSrcUse.length - 1]
          })`;
        } else {
          viewVer.style.backgroundImage = `url(${bestSrcUse[c - 1]})`;
        }
      });

      viewRight.addEventListener("click", function() {
        const targetStr = viewVer.style.backgroundImage;
        const splitUrl = targetStr.split(".");
        const extractedUrl = splitUrl[4];
        const currentBackUrl = `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.${extractedUrl}.png`;
        const c = bestSrcUse.indexOf(currentBackUrl);
        if (c === bestSrcUse.length - 1) {
          viewVer.style.backgroundImage = `url(${bestSrcUse[0]})`;
        } else {
          viewVer.style.backgroundImage = `url(${bestSrcUse[c + 1]})`;
        }
      });

      function bestListSet() {
        for (var i = 0; i < bestSrc.length; i += 1) {
          const bestDiv = document.createElement("div");
          bestDiv.className = "best-scene";
          const bestInnerTxt = document.createElement("span");
          bestInnerTxt.className = "bests__txt";
          bestDiv.appendChild(bestInnerTxt);
          sceneBox.appendChild(bestDiv);
        }
      }
      bestListSet();
      shuffleSrc();
      const bestDivs = document.querySelectorAll(".best-scene");
      bestDivs.forEach((item, i) => {
        item.id = i + 1;
        item.style.backgroundImage = `url(${bestSrcUse[i]})`;
        viewVer.style.backgroundImage = `url(${bestSrcUse[0]})`;
      });
      bestDivs.forEach(item => {
        item.addEventListener("click", function() {
          if (viewVer.style.backgroundImage !== "none") {
            viewVer.style.backgroundImage = "none";
          }
          let n = item.id - 1;
          viewVer.style.backgroundImage = `url(${bestSrcUse[n]})`;
        });
      });
    }
  }

  if (musicLoad) {
    const musicList = document.querySelectorAll(".music-list");
    const musicClicked = document.querySelectorAll(".music-clicked");

    musicList.forEach((item, i) => {
      item.id = i + 1;
    });

    musicList.forEach(item => {
      item.addEventListener("click", function() {
        if (musicClicked) {
          musicList.forEach(item => {
            item.classList.remove("music-clicked");
          });
        }
        item.classList.add("music-clicked");
      });
    });
  }

  if (gameLoad) {
    const jsGame = document.getElementById("jsGame");
    const jsNotice = document.getElementById("jsNotice");
    const jsSuccess = document.getElementById("jsSuccess");
    const timeCount = document.getElementById("jsTimeCount");
    const xbtn = document.querySelector(".xbtn");

    xbtn.addEventListener("click", function() {
      jsNotice.classList.replace("show", "hide");
      jsSuccess.classList.replace("show", "hide");
    });

    function noticeShow() {
      jsNotice.classList.replace("hide", "show");
      jsSuccess.classList.replace("hide", "show");
    }

    const row = 4;
    const clo = 3;

    let clickFlag = true;
    let clickedCards = [];
    let clearedCards = [];
    let startTiming;
    const imagesList = [
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F70tKV%2FbtqBtWPrlGE%2FmZqcmDSHKdYCTQS0n8edVk%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fk8i5i%2FbtqBuwh9p0Q%2Ftl7wcBHPrVSWNWccZKrFI1%2Fimg.gif",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FV5XN7%2FbtqBuQOeCWH%2FamCpQpWjkkl9sjfK7V15l1%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FmuVXK%2FbtqBuwoUTGh%2FhUHC1uxsmUxNhE95UDGIh1%2Fimg.gif",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcKJNsg%2FbtqBs0dUjfZ%2FpCdQYQ7pC8qZXY6xW1tTg0%2Fimg.gif",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fdl7oFe%2FbtqBui5vUot%2Fqb2ynaZc53pbke2miAYw6k%2Fimg.gif",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F70tKV%2FbtqBtWPrlGE%2FmZqcmDSHKdYCTQS0n8edVk%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fk8i5i%2FbtqBuwh9p0Q%2Ftl7wcBHPrVSWNWccZKrFI1%2Fimg.gif",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FV5XN7%2FbtqBuQOeCWH%2FamCpQpWjkkl9sjfK7V15l1%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FmuVXK%2FbtqBuwoUTGh%2FhUHC1uxsmUxNhE95UDGIh1%2Fimg.gif",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcKJNsg%2FbtqBs0dUjfZ%2FpCdQYQ7pC8qZXY6xW1tTg0%2Fimg.gif",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fdl7oFe%2FbtqBui5vUot%2Fqb2ynaZc53pbke2miAYw6k%2Fimg.gif"
    ];
    const mirandaImages = imagesList.slice();
    let miranda = [];

    function shuffleCard() {
      for (var i = 0; mirandaImages.length > 0; i += 1) {
        miranda = miranda.concat(
          mirandaImages.splice(
            Math.floor(Math.random() * mirandaImages.length),
            1
          )
        );
      }
    }

    function gameFinished() {
      let endTiming = new Date();
      clickFlag = false;
      timeCount.innerText = `It tooks ${Math.floor(
        (endTiming - startTiming) / 1000
      )}s.`;
    }

    function cardSet(row, clo) {
      clickFlag = false;
      for (var i = 0; i < row * clo; i += 1) {
        const cards = document.createElement("div");
        cards.className = "cards";
        const cardsInner = document.createElement("div");
        cardsInner.className = "cards__inner";
        const cardFront = document.createElement("div");
        cardFront.className = "card-front";
        cardFront.innerText = "Where's Miranda";
        const cardBack = document.createElement("div");
        cardBack.className = "card-back";
        cardBack.style.backgroundImage = `url(${miranda[i]})`;
        cardsInner.appendChild(cardFront);
        cardsInner.appendChild(cardBack);
        cards.appendChild(cardsInner);
        (function(c) {
          cards.addEventListener("click", function() {
            if (clickFlag && !clearedCards.includes(c)) {
              c.classList.toggle("flipped");
              clickedCards.push(c);
              if (clickedCards.length === 2) {
                if (
                  clickedCards[0].querySelector(".card-back").style
                    .backgroundImage ===
                  clickedCards[1].querySelector(".card-back").style
                    .backgroundImage
                ) {
                  clearedCards.push(clickedCards[0]);
                  clearedCards.push(clickedCards[1]);
                  clickedCards = [];
                  if (clearedCards.length === row * clo) {
                    gameFinished();
                    setTimeout(function() {
                      noticeShow();
                    }, 1000);
                  }
                } else {
                  clickFlag = false;
                  setTimeout(function() {
                    clickedCards[0].classList.remove("flipped");
                    clickedCards[1].classList.remove("flipped");
                    clickFlag = true;
                    clickedCards = [];
                  }, 1000);
                }
              }
            }
          });
        })(cards);
        jsGame.appendChild(cards);
      }

      document.querySelectorAll(".cards").forEach(function(cards, index) {
        setTimeout(function() {
          cards.classList.add("flipped");
        }, 1000 + 100 * index);
      });

      setTimeout(function() {
        document.querySelectorAll(".cards").forEach(function(cards) {
          cards.classList.remove("flipped");
        });
        clickFlag = true;
        startTiming = new Date();
      }, 5000);
    }

    shuffleCard();
    cardSet(row, clo);
  }
};
