/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */
window.onload = function() {
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
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fds9XjD%2FbtqBlhTpjdP%2F2etef83uCLVyKXETk65sNk%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdodsqX%2FbtqBsH6Cz6j%2FUlkvXSY6EAAlO2ToJGvNR1%2Fimg.gif",
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdjVdll%2FbtqBjVwWStV%2FNUYaU84odXYxmzLeGNbuQK%2Fimg.gif"
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
      const viewVer = document.createElement("div");
      viewVer.className = "veiw-ver";
      gifWrapper.appendChild(viewBoard);
      viewBoard.appendChild(viewVer);

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
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcyXb52%2FbtqBtLN0vZB%2FuYOsSR87nyW3OLZgK859R0%2Fimg.png"
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
      sceneWrapper.appendChild(viewBoard);
      viewBoard.appendChild(viewVer);

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
        document.querySelectorAll(".cards").forEach(function(cards, index) {
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
