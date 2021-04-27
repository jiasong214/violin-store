(() => {
  const sectionInfo = [
    {
      //0
      type: "fixed",
      heightScale: 5, //section height = window innerHeight * 5
      height: 0,
      objs: {
        container: document.querySelector(".scroll-section-0"),
        canvas: document.querySelector(".intro-video__canvas"),
        context: document
          .querySelector(".intro-video__canvas")
          .getContext("2d"),
        videoImages: [],
        text1: document.querySelector(".intro-video__text.--a"),
        text2: document.querySelector(".intro-video__text.--b"),
        text3: document.querySelector(".intro-video__text.--c"),
      },
      values: {
        videoImageCount: 75,
        imageSequence: [0, 74],
        canvas_opacity: [1, 0, { start: 0.9, end: 1 }],
        text1_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
        text2_opacity_in: [0, 1, { start: 0.35, end: 0.45 }],
        text3_opacity_in: [0, 1, { start: 0.6, end: 0.7 }],
        text1_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
        text2_translateY_in: [20, 0, { start: 0.35, end: 0.45 }],
        text3_translateY_in: [20, 0, { start: 0.6, end: 0.7 }],
        text1_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
        text2_opacity_out: [1, 0, { start: 0.5, end: 0.55 }],
        text3_opacity_out: [1, 0, { start: 0.75, end: 0.8 }],
        text1_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
        text2_translateY_out: [0, -20, { start: 0.5, end: 0.55 }],
        text3_translateY_out: [0, -20, { start: 0.75, end: 0.8 }],
      },
    },
    {
      //1
      type: "static",
      height: 0,
      objs: {
        container: document.querySelector(".scroll-section-1"),
      },
    },
    {
      //2
      type: "fixed",
      heightScale: 6,
      height: 0,
      objs: {
        container: document.querySelector(".scroll-section-2"),
        image: document.querySelector(".product-feature__img"),
        desc1: document.querySelector(".product-feature__desc.--a"),
        pin1: document.querySelector(".product-feature__descA__pin"),
        desc2: document.querySelector(".product-feature__desc.--b"),
        pin2: document.querySelector(".product-feature__descB__pin"),
      },
      values: {
        image_height_in: [80, 160, { start: 0.1, end: 0.2 }],
        image_translateY1_in: [0, 5, { start: 0.1, end: 0.2 }],
        image_translateY2_in: [5, -50, { start: 0.45, end: 0.55 }],
        desc1_opacity_in: [0, 1, { start: 0.2, end: 0.3 }],
        desc2_opacity_in: [0, 1, { start: 0.55, end: 0.65 }],
        desc1_opacity_out: [1, 0, { start: 0.4, end: 0.43 }],
        desc2_opacity_out: [1, 0, { start: 0.75, end: 0.78 }],
        desc1_translateX_in: [-150, -160, { start: 0.2, end: 0.3 }],
        desc2_translateX_in: [60, 70, { start: 0.55, end: 0.65 }],
        desc1_translateX_out: [-160, -150, { start: 0.4, end: 0.43 }],
        desc2_translateX_out: [70, 60, { start: 0.75, end: 0.78 }],
        pin1_scaleX: [0, 40, { start: 0.2, end: 0.3 }],
        pin2_scaleX: [0, 30, { start: 0.55, end: 0.65 }],
      },
    },
    {
      //3
      type: "fixed",
      heightScale: 7,
      height: 0,
      objs: {
        container: document.querySelector(".scroll-section-3"),
        canvas: document.querySelector(".violinist__canvas"),
        context: document.querySelector(".violinist__canvas").getContext("2d"),
        violinistInfo: document.querySelector(".violinist__violinist-info"),
        violinistQuote: document.querySelector(".violinist__violinist-quote"),
        desc: document.querySelector("violinist__desc"),
        imagesArray: [],
        imagesPath: [
          "images/main_images/violinist__1.png",
          "images/main_images/violinist__2.png",
        ],
      },
      values: {
        leftRect: [0, 0, { start: 0, end: 0 }],
        rightRect: [0, 0, { start: 0, end: 0 }],
        rectStart: 0,
        imageBlend_height: [0, 0, { start: 0, end: 0 }],
        canvas_scale: [0, 0, { start: 0, end: 0 }],
      },
    },
    {
      //4
      type: "fixed",
      heightScale: 7,
      height: 0,
      objs: {
        container: document.querySelector(".scroll-section-4"),
        logo: document.querySelector(".support__logo"),
        path: document.querySelector(".support__path path"),
        bowImage: document.querySelector(".support__bowImage"),
        caseImage: document.querySelector(".support__caseImage"),
        text1: document.querySelector(".support__text.--a"),
        text2: document.querySelector(".support__text.--b"),
        caseLogo: document.querySelector(".support__case-logo"),
      },
      values: {
        logo_width_in: [3000, 300, { start: 0.1, end: 0.3 }],
        logo_width_out: [300, 70, { start: 0.3, end: 0.5 }],
        logo_translateX_in: [-10, -20, { start: 0.2, end: 0.3 }],
        logo_translateX_out: [-20, -50, { start: 0.3, end: 0.5 }],
        logo_translateY_out: [0, -600, { start: 0.5, end: 0.9 }],
        caseLogo_translateY_out: [0, -300, { start: 0.5, end: 0.9 }],

        path_dashoffset_in: [1401, 0, { start: 0.2, end: 0.3 }],
        path_dashoffset_out: [0, -1401, { start: 0.35, end: 0.45 }],
        bowImage_right: [-10, 70, { start: 0.3, end: 0.8 }],
        bowImage_bottom: [-80, 150, { start: 0.3, end: 0.8 }],
        bowImage_rotate: [-120, -200, { start: 0.3, end: 0.8 }],
        caseImage_right: [-150, 120, { start: 0.5, end: 0.9 }],
        caseImage_bottom: [30, -50, { start: 0.5, end: 0.9 }],
        caseImage_rotate: [0, 80, { start: 0.5, end: 0.9 }],
        text1_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
        text2_opacity_in: [0, 1, { start: 0.25, end: 0.35 }],
        text1_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
        text1_opacity_out: [1, 0, { start: 0.3, end: 0.4 }],
        text2_opacity_out: [1, 0, { start: 0.35, end: 0.4 }],
        text1_translateY_out: [0, -20, { start: 0.3, end: 0.4 }],
      },
    },
    {
      //5
      type: "static",
      heightScale: 1,
      height: 0,
      objs: {
        container: document.querySelector(".scroll-section-5"),
      },
      values: {},
    },
  ];

  let prevScrollHeight = 0;
  let currentSection = 0;
  let enterNewSection = false;

  const fixLocalNav = () => {
    const header = document.querySelector("header");
    if (window.pageYOffset > 1) {
      header.classList.add("--fixed");
    } else {
      header.classList.remove("--fixed");
    }
  };

  const setSectionHeight = () => {
    sectionInfo.forEach((section) => {
      if (section.type === "fixed") {
        section.height = section.heightScale * window.innerHeight;
      } else if (section.type === "static") {
        section.height = section.objs.container.offsetHeight;
      }

      section.objs.container.style.height = `${section.height}px`;
    });
  };

  const setCurrentSection = () => {
    let totalHeight = 0;

    for (let i = 0; i < sectionInfo.length; i++) {
      totalHeight += sectionInfo[i].height;

      if (totalHeight >= window.pageYOffset) {
        currentSection = i;
        break;
      }
    }

    document.body.setAttribute("id", `active-scroll-section-${currentSection}`);
  };

  const setCanvasScale = () => {
    const heightRatio = window.innerHeight / 1080;
    sectionInfo[0].objs.canvas.style.transform = `translate3D(-50%, -50%, 0) scale(${heightRatio})`;
  };

  const changeCurrentSection = () => {
    prevScrollHeight = 0;
    enterNewSection = false;

    //get how much you scrolled
    for (let i = 0; i < currentSection; i++) {
      prevScrollHeight += sectionInfo[i].height;
    }

    //when you scroll down, set currentSection +
    if (
      window.pageYOffset >
      prevScrollHeight + sectionInfo[currentSection].height
    ) {
      enterNewSection = true;
      currentSection++;
    }

    //when you scroll up, set currentSection - (except first section)
    if (window.pageYOffset < prevScrollHeight) {
      if (currentSection === 0) return;
      enterNewSection = true;
      currentSection--;
    }

    document.body.setAttribute("id", `active-scroll-section-${currentSection}`);

    //to block the wrong value of currentYOffset
    if (enterNewSection) return;
  };

  const setCanvasImage = () => {
    let section1Img;
    for (let i = 0; i < sectionInfo[0].values.videoImageCount; i++) {
      section1Img = document.createElement("img");
      section1Img.src = `images/main_images/intro-video__shoot/${1000 + i}.jpg`;
      sectionInfo[0].objs.videoImages.push(section1Img);
    }

    let section3Img;
    for (let i = 0; i < sectionInfo[3].objs.imagesPath.length; i++) {
      section3Img = document.createElement("img");
      section3Img.src = sectionInfo[3].objs.imagesPath[i];
      sectionInfo[3].objs.imagesArray.push(section3Img);
    }
  };

  const calcValues = (
    values,
    // currentYOffset = window.pageYOffset - prevScrollHeight
  ) => {
    const currentYOffset = window.pageYOffset - prevScrollHeight;
    const sectionHeight = sectionInfo[currentSection].height;
    const scrollRatio = currentYOffset / sectionHeight;
    let rv;

    if (values.length === 3) {
      const effectStart = values[2].start * sectionHeight;
      const effectEnd = values[2].end * sectionHeight;
      const effectHeight = effectEnd - effectStart;

      if (currentYOffset >= effectStart && currentYOffset <= effectEnd) {
        rv =
          ((currentYOffset - effectStart) / effectHeight) *
            (values[1] - values[0]) +
          values[0];


      } else if (currentYOffset < effectStart) {
        rv = values[0];

      } else if (currentYOffset > effectEnd) {
        rv = values[1];
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }

    return rv;
  };

  const playAnimation = () => {
    if (enterNewSection) return;

    const objs = sectionInfo[currentSection].objs;
    const values = sectionInfo[currentSection].values;
    const currentYOffset = window.pageYOffset - prevScrollHeight;
    const sectionHeight = sectionInfo[currentSection].height;
    const scrollRatio = currentYOffset / sectionHeight;


    switch (currentSection) {
      case 0:
        document.body.classList.add("white-header");
        objs.canvas.style.opacity = calcValues(values.canvas_opacity);
        // canvas drawing is handled function 'accelerateScroll'

        if (scrollRatio <= 0.22) {
          objs.text1.style.opacity = calcValues(values.text1_opacity_in);
          objs.text1.style.transform = `translate3d(0, ${calcValues(
            values.text1_translateY_in
          )}%, 0)`;
        } else {
          objs.text1.style.opacity = calcValues(values.text1_opacity_out);
          objs.text1.style.transform = `translate3d(0, ${calcValues(
            values.text1_translateY_out
          )}%, 0)`;
        }

        if (scrollRatio <= 0.42) {
          objs.text2.style.opacity = calcValues(values.text2_opacity_in);
          objs.text2.style.transform = `translate3d(0, ${calcValues(
            values.text2_translateY_in
          )}%, 0)`;
        } else {
          objs.text2.style.opacity = calcValues(values.text2_opacity_out);
          objs.text2.style.transform = `translate3d(0, ${calcValues(
            values.text2_translateY_out
          )}%, 0)`;
        }

        if (scrollRatio <= 0.62) {
          objs.text3.style.opacity = calcValues(values.text3_opacity_in);
          objs.text3.style.transform = `translate3d(0, ${calcValues(
            values.text3_translateY_in
          )}%, 0)`;
        } else {
          objs.text3.style.opacity = calcValues(values.text3_opacity_out);
          objs.text3.style.transform = `translate3d(0, ${calcValues(
            values.text3_translateY_out
          )}%, 0)`;
        }

        break;
      case 1:
        document.body.classList.remove("white-header");
        //no effect for section1
        break;
      case 2:
        document.body.classList.remove("white-header");

        //when section's innerbox top touchs browser top, fix the image and make it bigger
        if (scrollRatio > window.innerHeight / 2 / sectionHeight) {
          objs.image.classList.add("fixed");


          objs.image.style.height = `${calcValues(values.image_height_in)}vh`;
          objs.image.style.transform = `translate3d(-50%,${calcValues(
            values.image_translateY1_in
          )}%, 0)`;
        } else {
          objs.image.classList.remove("fixed");
        }

        //first desciption appear
        if (scrollRatio <= 0.3) {
          objs.desc1.style.opacity = calcValues(values.desc1_opacity_in);
          objs.desc1.style.transform = `translate3d(${calcValues(
            values.desc1_translateX_in
          )}%, 0, 0)`;
          objs.pin1.style.width = `${calcValues(values.pin1_scaleX)}%`;
        } else {
          objs.desc1.style.opacity = calcValues(values.desc1_opacity_out);
          objs.desc1.style.transform = `translate3d(${calcValues(
            values.desc1_translateX_out
          )}%, 0, 0)`;
        }

        //image down
        if (scrollRatio >= 0.45) {
          objs.image.style.transform = `translate3d(-50%,${calcValues(
            values.image_translateY2_in
          )}%, 0)`;
        }

        //second description appear
        if (scrollRatio < 0.7) {
          objs.desc2.style.opacity = calcValues(values.desc2_opacity_in);
          objs.desc2.style.transform = `translate3d(${calcValues(
            values.desc2_translateX_in
          )}%, 0, 0)`;
          objs.pin2.style.width = `${calcValues(values.pin2_scaleX)}%`;
        } else {
          objs.desc2.style.opacity = calcValues(values.desc2_opacity_out);
          objs.desc2.style.transform = `translate3d(${calcValues(
            values.desc2_translateX_out
          )}%, 0, 0)`;
        }

        //when section bottom touch brower botton, make image follow scroll up
        if (
          scrollRatio >
          (sectionHeight - window.innerHeight) / sectionHeight
        ) {
          objs.image.style.top = `${
            window.innerHeight / 2 -
            (currentYOffset - sectionHeight * 0.8) -
            innerHeight * 0.2
          }px`;
          objs.image.style.transform = `translate3d(-50%, -50%, 0)`;
        } else {
          objs.image.style.top = `10vh`;
        }


        //section 3 image pre-setting
        if (scrollRatio > 0.7) {
          const objs = sectionInfo[3].objs;
					const values = sectionInfo[3].values;
					const widthRatio = window.innerWidth / objs.canvas.width;
					const heightRatio = window.innerHeight / objs.canvas.height;
					let canvasRatio;

          //make a full screen canvas
          widthRatio <= heightRatio
            ? (canvasRatio = heightRatio)
            : (canvasRatio = widthRatio);

            objs.canvas.style.transform = `scale(${canvasRatio})`;
            objs.context.fillStyle = 'white';
            objs.context.drawImage(objs.imagesArray[0], 0, 0);
  
            //set white boxes start width and end width
            const recalculatedInnerWidth = document.body.offsetWidth / canvasRatio;
            const whiteRectWidth = recalculatedInnerWidth * 0.1;

            values.leftRect[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
            values.leftRect[1] = values.leftRect[0] - whiteRectWidth;
            values.rightRect[0] = values.leftRect[0] + recalculatedInnerWidth - whiteRectWidth;
            values.rightRect[1] = values.rightRect[0] + whiteRectWidth;
  
            //draw white boxes on the side
            objs.context.fillRect(
              parseInt(values.leftRect[0]),
              0,
              parseInt(whiteRectWidth),
              objs.canvas.height
            );
            objs.context.fillRect(
              parseInt(values.rightRect[0]),
              0,
              parseInt(whiteRectWidth),
              objs.canvas.height
            );
          }
    
        break;
      case 3:
        document.body.classList.remove("white-header");

        //step 1-0. make a full screen canvas
        let widthRatio = window.innerWidth / objs.canvas.width;
        let heightRatio = window.innerHeight / objs.canvas.height;
        let canvasRatio;

        widthRatio <= heightRatio
          ? (canvasRatio = heightRatio)
          : (canvasRatio = widthRatio);

        objs.canvas.style.transform = `scale(${canvasRatio})`;
        objs.context.fillStyle = "white";
        objs.context.drawImage(objs.imagesArray[0], 0, 0);

        //step 1-1. set white boxs start, end point
        if (!values.rectStart) {
          values.rectStart =
            objs.canvas.offsetTop +
            (objs.canvas.height - objs.canvas.height * canvasRatio) / 2;
          values.leftRect[2].start = window.innerHeight / 3 / sectionHeight;
          values.rightRect[2].start = window.innerHeight / 3 / sectionHeight;
          values.leftRect[2].end = values.rectStart / sectionHeight;
          values.rightRect[2].end = values.rectStart / sectionHeight;
        }

        let recalculatedInnerWidth = document.body.offsetWidth / canvasRatio;

        //to make canvas style - width: 80vw, max-width: 980px
        if (window.innerWidth >= 1225) {
          rectWidth = (window.innerWidth - 980) / 2;
          // console.log(window.innerWidth - rectWidth * 2);
        } else {
          rectWidth = recalculatedInnerWidth * 0.1;
        }

        //step 1-2. set white boxes start width and end width
        values.leftRect[0] = (objs.canvas.width - recalculatedInnerWidth) / 2;
        values.leftRect[1] = values.leftRect[0] - rectWidth;
        values.rightRect[0] =
          values.leftRect[0] + recalculatedInnerWidth - rectWidth;
        values.rightRect[1] = values.rightRect[0] + rectWidth;
        console.log(calcValues(values.rightRect))

        //draw white boxes on the side
        objs.context.fillRect(
          parseInt(calcValues(values.leftRect)),
          0,
          parseInt(rectWidth),
          objs.canvas.height
        );
        objs.context.fillRect(
          parseInt(calcValues(values.rightRect)),
          0,
          parseInt(rectWidth),
          objs.canvas.height
        );

        // step 2-0. if canvas touched on top of the browser, start blending image
        if (scrollRatio < values.leftRect[2].end) {
          objs.canvas.classList.remove("fixed");
          objs.violinistInfo.style.opacity = 0;
        } else {
          objs.canvas.classList.add("fixed");
          objs.canvas.style.top = `${
            -(objs.canvas.height - objs.canvas.height * canvasRatio) / 2
          }px`;

          //put the violinist information text on first image
          if (scrollRatio > values.leftRect[2].end + 0.15) {
            objs.violinistInfo.style.opacity = 0;
          } else {
            objs.violinistInfo.style.opacity = 1;
          }

          const imageBlend_delay = 0.1;

          if (scrollRatio > values.leftRect[2].end + imageBlend_delay) {
            //step 2-1. set the blending image values
            values.imageBlend_height[0] = 0;
            values.imageBlend_height[1] = objs.canvas.height;
            values.imageBlend_height[2].start =
              values.leftRect[2].end + imageBlend_delay;
            values.imageBlend_height[2].end =
              values.leftRect[2].end + 0.2 + imageBlend_delay;

            //step 2-2. draw blending image on canvas
            const blendHeight = calcValues(values.imageBlend_height);

            objs.context.drawImage(
              objs.imagesArray[1],
              0,
              objs.canvas.height - blendHeight,
              objs.canvas.width,
              blendHeight,
              0,
              objs.canvas.height - blendHeight,
              objs.canvas.width,
              blendHeight
            );

            if (scrollRatio >= values.imageBlend_height[2].end) {
              document.body.classList.add("white-header");
            }

            //put the violinist Quote text on second image
            if (
              scrollRatio >
              values.leftRect[2].end + imageBlend_delay + 0.15
            ) {
              objs.violinistQuote.style.opacity = 1;
            } else {
              objs.violinistQuote.style.opacity = 0;
            }

            //step 3-0. if blend image is full, make canvas smaller
            if (
              scrollRatio >
              values.imageBlend_height[2].end + imageBlend_delay
            ) {
              document.body.classList.remove("white-header");

              //step 3-1. set the canvas scale changing values
              let canvasNewWidth;
              //to make canvas style - width: 80vw, max-width: 980px
              if (window.innerWidth >= 1225) {
                canvasNewWidth = 980 / objs.canvas.width;
              } else {
                canvasNewWidth =
                  (document.body.offsetWidth / objs.canvas.width) * 0.8;
              }

              values.canvas_scale[0] = canvasRatio;
              values.canvas_scale[1] = canvasNewWidth;
              values.canvas_scale[2].start =
                values.imageBlend_height[2].end + imageBlend_delay;
              values.canvas_scale[2].end = values.canvas_scale[2].start + 0.2;

              //step 3-2. change scale of canvas
              objs.canvas.style.transform = `scale(${calcValues(
                values.canvas_scale
              )})`;

              //remove the violinist Quote text on second image
              if (
                scrollRatio >
                values.imageBlend_height[2].end + imageBlend_delay + 0.15
              ) {
                objs.violinistQuote.style.opacity = 0;
              }

              //step 4. make canvas position static
              if (
                values.canvas_scale[2].end !== 0 &&
                scrollRatio > values.canvas_scale[2].end
              ) {
                objs.canvas.classList.remove("fixed");
                objs.canvas.style.marginTop = `${
                  sectionHeight * (0.2 + 0.2 + imageBlend_delay * 2)
                }px`;
              } else {
                objs.canvas.style.marginTop = "0px";
              }
            }
          }
        }

        break;
      case 4:
        //header color setting
        if (scrollRatio >= 0.25) {
          document.body.classList.remove("white-header");
        } else {
          document.body.classList.add("white-header");
        }

        //step 1. first text appear
        if (scrollRatio <= 0.25) {
          objs.text1.style.opacity = calcValues(values.text1_opacity_in);
          objs.text1.style.transform = `translate3d(0, ${calcValues(
            values.text1_translateY_in
          )}%, 0)`;
        } else {
          objs.text1.style.opacity = calcValues(values.text1_opacity_out);
          objs.text1.style.transform = `translate3d(0, ${calcValues(
            values.text1_translateY_out
          )}%, 0)`;
        }

        //step 2. make logo smaller
        if (scrollRatio <= 0.3) {
          objs.logo.style.width = `${calcValues(values.logo_width_in)}vw`;
          objs.logo.style.transform = `translate3d(${calcValues(
            values.logo_translateX_in
          )}%, -50%,0)`;
        } else {
          objs.logo.style.width = `${calcValues(values.logo_width_out)}vw`;
          objs.logo.style.transform = `translate3d(${calcValues(
            values.logo_translateX_out
          )}%, -50%, 0)`;
        }

        //step 3. draw path
        if (scrollRatio <= 0.3) {
          objs.path.style.strokeDashoffset = calcValues(
            values.path_dashoffset_in
          );
        } else {
          objs.path.style.strokeDashoffset = calcValues(
            values.path_dashoffset_out
          );
        }

        //step 4. second text appear
        if (scrollRatio <= 0.35) {
          objs.text2.style.opacity = calcValues(values.text2_opacity_in);
        } else {
          objs.text2.style.opacity = calcValues(values.text2_opacity_out);
        }

        // image movement
        objs.bowImage.style.right = `${calcValues(values.bowImage_right)}%`;
        objs.bowImage.style.bottom = `${calcValues(values.bowImage_bottom)}%`;
        objs.bowImage.style.transform = `rotate(${calcValues(
          values.bowImage_rotate
        )}deg)`;

        objs.caseImage.style.right = `${calcValues(values.caseImage_right)}%`;
        objs.caseImage.style.top = `${calcValues(values.caseImage_bottom)}%`;
        objs.caseImage.style.transform = `rotate(${calcValues(
          values.caseImage_rotate
        )}deg)`;

        //step 5. make logo up
        if (scrollRatio >= values.logo_width_out[2].end) {
          objs.logo.style.transform = `translate3d(-50%, ${
            calcValues(values.logo_translateY_out) - 50
          }%,0)`;

          objs.caseLogo.style.transform = `translate3d(0, ${calcValues(
            values.caseLogo_translateY_out
          )}%,0)`;
        }

        break;
      case 5:
        document.body.classList.add("white-header");

        break;
    }
  };

  let delayedYOffset = 0;
  let accelerationState;
  let accelerationId;

  //for smooth video scrolling
  const accelerateScroll = () => {
    delayedYOffset =
      delayedYOffset + (window.pageYOffset - delayedYOffset) * 0.1;

    if (!enterNewSection) {
      const currentYOffset = delayedYOffset - prevScrollHeight;
      const objs = sectionInfo[currentSection].objs;
      const values = sectionInfo[currentSection].values;

      if (currentSection === 0) {
        let sequence = Math.round(
          calcValues(values.imageSequence, currentYOffset)
        );

        if (objs.videoImages[sequence]) {
          objs.context.drawImage(objs.videoImages[sequence], 0, 0);
        }
      }
    }

    accelerationId = requestAnimationFrame(accelerateScroll);

    if (Math.abs(window.pageYOffset - delayedYOffset) < 1) {
      cancelAnimationFrame(accelerationId);
      accelerationState = false;
    }
  };

  const checkUserWidth = () => {
    const container = document.querySelector("#container");

    if (window.innerWidth < 680) {
      container.classList.add("is-mobile");
      container.classList.remove("is-desktop");
    } else {
      container.classList.add("is-desktop");
      container.classList.remove("is-mobile");
    }
  };

  const changeMobileHeaderColor = () => {
    const intro = document.querySelector(".m__intro");

    if (intro.offsetHeight <= window.pageYOffset) {
      document.body.classList.remove("white-header");
    } else {
      document.body.classList.add("white-header");
    }
  };

  window.addEventListener("resize", () => {
    checkUserWidth();
    setSectionHeight();
    setCurrentSection();
    setCanvasScale();
  });

  window.addEventListener("orientationchange", () => {
    checkUserWidth();
    setSectionHeight();
    setCurrentSection();
    setCanvasScale();
  });

  window.addEventListener("scroll", () => {
    changeCurrentSection();
    playAnimation();
    fixLocalNav();

    if (!accelerationState) {
      accelerationId = requestAnimationFrame(accelerateScroll);
      accelerationState = true;
    }

    if (window.innerWidth < 600) {
      changeMobileHeaderColor();
    }
  });

  window.addEventListener("load", () => {
    checkUserWidth();
    setSectionHeight();
    setCanvasImage();
    setCanvasScale();
    setCurrentSection();

    //set the first screen
    const intervalId = setInterval(() => {
      sectionInfo[0].objs.context.drawImage(
        sectionInfo[0].objs.videoImages[1],
        0,
        0
      );

      setTimeout(() => clearInterval(intervalId), 2000);
      }, 100);
  });
})();
