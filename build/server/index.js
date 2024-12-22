import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts, useLocation, Link, useLoaderData } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState } from "react";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App
}, Symbol.toStringTag, { value: "Module" }));
const categories = [
  {
    id: "paintings",
    name: "Paintings",
    image: "app/assets/art/yuyuan.jpeg",
    pieces: [
      {
        title: "给我",
        imageSrc: "app/assets/art/yuyuan.jpeg"
      },
      {
        title: "The Monsters Have Changed",
        imageSrc: "app/assets/art/dream.jpeg"
      },
      {
        title: "Summer",
        imageSrc: "app/assets/art/flowers.jpeg"
      },
      {
        title: "Most Important Meal",
        imageSrc: "app/assets/art/bfast.jpeg"
      }
    ]
  },
  {
    id: "nature",
    name: "Nature",
    image: "app/assets/art/fish.png",
    pieces: [
      {
        title: "Koi Fish Pond",
        imageSrc: "app/assets/art/fish.png"
      },
      {
        title: "Scale",
        imageSrc: "app/assets/art/arch.jpg"
      },
      {
        title: "Splash",
        imageSrc: "app/assets/art/waves.jpg"
      },
      {
        title: "Conditions",
        imageSrc: "app/assets/art/turtle.jpg"
      },
      {
        title: "Niagara",
        imageSrc: "app/assets/art/niagara.png"
      },
      {
        title: "Lost",
        imageSrc: "app/assets/art/canyon.png"
      }
    ]
  },
  {
    id: "fruits",
    name: "Fruits",
    image: "app/assets/art/berries.PNG",
    pieces: [
      {
        title: "Haul",
        imageSrc: "app/assets/art/apples.jpg"
      },
      {
        title: "Love",
        imageSrc: "app/assets/art/grapefruit.jpg"
      },
      {
        title: "Complementary",
        imageSrc: "app/assets/art/oranges.jpg"
      },
      {
        title: "",
        imageSrc: "app/assets/art/papaya.jpg"
      },
      {
        title: "",
        imageSrc: "app/assets/art/peaches.jpg"
      },
      {
        title: "",
        imageSrc: "app/assets/art/berries.PNG"
      }
    ]
  },
  {
    id: "sky",
    name: "Sky",
    image: "app/assets/art/hotairballoon.jpg",
    pieces: [
      {
        title: "x2",
        imageSrc: "app/assets/art/rainbow.jpg"
      },
      {
        title: "Manmade",
        imageSrc: "app/assets/art/hotairballoon.jpg"
      },
      {
        title: "Dawn from above",
        imageSrc: "app/assets/art/plane.jpg"
      },
      {
        title: "Seattle",
        imageSrc: "app/assets/art/seattle.jpg"
      }
    ]
  },
  {
    id: "flora",
    name: "Flora",
    image: "app/assets/art/dandelion.jpeg",
    pieces: [
      {
        title: "On the way to a wish",
        imageSrc: "app/assets/art/dandelion.jpeg"
      },
      {
        title: "Sage",
        imageSrc: "app/assets/art/leaf.jpeg"
      },
      {
        title: "Groovy",
        imageSrc: "app/assets/art/plant.jpeg"
      },
      {
        title: "On Edge",
        imageSrc: "app/assets/art/kitchen.png"
      },
      {
        title: "40 in a 25",
        imageSrc: "app/assets/art/driveby.png"
      }
    ]
  },
  {
    id: "b&w",
    name: "B&W",
    image: "app/assets/art/print_crop.jpeg",
    pieces: [
      {
        title: "10,000-hour rule",
        imageSrc: "app/assets/art/piano.jpg"
      },
      {
        title: "Reflection",
        imageSrc: "app/assets/art/duck.jpeg"
      },
      {
        title: "Foundation",
        imageSrc: "app/assets/art/print.jpeg"
      },
      {
        title: "",
        imageSrc: "app/assets/art/window.jpeg"
      },
      {
        title: "Cutout",
        imageSrc: "app/assets/art/cutout.jpg"
      }
    ]
  },
  {
    id: "eats",
    name: "Eats",
    image: "app/assets/art/dumplings.jpg",
    pieces: [
      {
        title: "Marie Bette",
        imageSrc: "app/assets/art/croissant.jpg"
      },
      {
        title: "Christian's",
        imageSrc: "app/assets/art/pizza.PNG"
      },
      {
        title: "Bodo's",
        imageSrc: "app/assets/art/bagels.jpg"
      },
      {
        title: "Marco and Luca",
        imageSrc: "app/assets/art/dumplings.jpg"
      }
    ]
  },
  {
    id: "luminous",
    name: "Luminous",
    image: "app/assets/art/fire.jpg",
    pieces: [
      {
        title: "Lanterns",
        imageSrc: "app/assets/art/lanterns.jpg"
      },
      {
        title: "",
        imageSrc: "app/assets/art/whale.jpg"
      },
      {
        title: "Road Trip",
        imageSrc: "app/assets/art/car.jpg"
      },
      {
        title: "Whiteboard",
        imageSrc: "app/assets/art/whaleshark.jpg"
      },
      {
        title: "Camping",
        imageSrc: "app/assets/art/fire.jpg"
      }
    ]
  },
  {
    id: "studies",
    name: "Studies",
    image: "app/assets/art/still.JPG",
    pieces: [
      {
        title: "Still Life",
        imageSrc: "app/assets/art/still.JPG"
      },
      {
        title: "Pears",
        imageSrc: "app/assets/art/pears.jpeg"
      },
      {
        title: "Cezanne Copy",
        imageSrc: "app/assets/art/cezanne.JPG"
      },
      {
        title: "Candy Still Life WIP",
        imageSrc: "app/assets/art/sourpatch.jpeg"
      }
    ]
  },
  {
    id: "animated",
    name: "Animated",
    image: "app/assets/art/floursack.png",
    pieces: [
      {
        title: "Talent Show",
        imageSrc: "app/assets/art/talentshow.mp4"
      },
      {
        title: "Flour Sack",
        imageSrc: "app/assets/art/floursack.mp4"
      },
      {
        title: "Ball Bounces",
        imageSrc: "app/assets/art/balls.mp4"
      }
    ]
  }
];
function CatNavbar() {
  const location = useLocation();
  console.log(location);
  const isActive = (path) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsx("nav", { className: "relative px-8 shrink-0 grid grid-cols-5 gap-x-3 \n    gap-y-4 md:gap-0 md:items-start text-center\n    md:flex md:flex-col mt-24 md:fixed md:mx-7 md:pl-14 md:mt-[300px]", children: categories.map((cat) => /* @__PURE__ */ jsx(
    Link,
    {
      to: `/${cat.id}`,
      onClick: () => {
        setIsOpen(!isOpen);
      },
      className: `text-sm md:text-lg hover:text-[#3a3987] md:-mb-1 ${isActive(`/${cat.id}`) ? "text-purple" : "text-black"}`,
      children: cat.name
    },
    cat.name
  )) });
}
function VNavbar() {
  const location = useLocation();
  console.log(location);
  const isActive = (path) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsx("nav", { className: "relative md:fixed flex items-center justify-between pt-16 mx-[10%] z-10\n    md:mx-0 md:flex-col md:pt-40 md:pl-14 md:w-64", children: /* @__PURE__ */ jsxs("div", { className: "md:flex md:flex-col", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", className: "text-2xl md:text-3xl font-medium text-black mb-6 hover:text-[#3a3987]", children: "Amy Wang" }),
    /* @__PURE__ */ jsxs("div", { className: "md:hidden", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(!isOpen), children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "app/assets/nav/menuIconB.png",
          className: `w-6 h-6 mr-6 ${isOpen ? "hidden" : "block"}
            absolute top-[68px] -right-5`
        }
      ) }),
      /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(!isOpen), children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "app/assets/nav/closeIconB.png",
          className: `w-6 h-6 mr-6 ${isOpen ? "block" : "hidden"}
            absolute top-[68px] -right-5`
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `${isOpen ? "block" : "scale-y-0 md:flex md:scale-100"}
            relative flex flex-col text-right transition-all duration-300`, children: /* @__PURE__ */ jsxs("div", { className: "absolute md:static flex flex-col gap-2 md:gap-0 md:text-start\n            -top-3 left-72 overflow-hidden md:overflow-auto", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: ` md:text-2xl hover:text-[#3a3987] ${isActive("/") ? "text-purple" : "text-black"}`,
          children: "Home"
        },
        "Home"
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/art",
          className: ` md:text-2xl hover:text-[#3a3987] md:mb-6 ${isActive("/art") ? "text-purple" : "text-black"}`,
          children: "Art"
        },
        "Art"
      )
    ] }) })
  ] }) });
}
const loader = async ({ params }) => {
  const categoryId = params.categoryId;
  const category = categories.find((cat) => cat.id === categoryId);
  return { categoryId, categoryName: category == null ? void 0 : category.name, pieces: category == null ? void 0 : category.pieces };
};
const meta$2 = ({
  data
}) => {
  const { categoryName } = data;
  return [
    { title: `${categoryName}` },
    { name: "description", content: `Artworks of mine related to ${categoryName}` }
  ];
};
function ArtCategory() {
  const { categoryId, categoryName, pieces } = useLoaderData();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(VNavbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col relative", children: [
      /* @__PURE__ */ jsx(CatNavbar, {}),
      /* @__PURE__ */ jsxs("div", { className: "pt-16 md:pt-36 pl-8 md:pl-72", children: [
        /* @__PURE__ */ jsxs("div", { className: "gallery flex gap-5 overflow-x-auto", children: [
          categoryId != "animated" && pieces.map((piece, index) => /* @__PURE__ */ jsx("div", { className: `relative flex-shrink-0 h-[500px] w-auto ${index === pieces.length - 1 ? "mr-8 md:mr-16" : ""}`, children: /* @__PURE__ */ jsx(
            "img",
            {
              src: piece.imageSrc,
              alt: piece.title,
              className: "object-contain h-48 md:h-full w-auto"
            }
          ) })),
          categoryId === "animated" && pieces.map((piece, index) => /* @__PURE__ */ jsx("div", { className: `relative flex-shrink-0 h-[500px] w-auto ${index === pieces.length - 1 ? "mr-8 md:mr-16" : ""}`, children: /* @__PURE__ */ jsxs("video", { className: "h-48 md:h-full w-auto", controls: true, children: [
            /* @__PURE__ */ jsx(
              "source",
              {
                src: piece.imageSrc,
                type: "video/mp4"
              }
            ),
            "This browser doesn't support the video tag."
          ] }) }))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute top-[90%] left-8 flex items-center md:hidden gap-x-1", children: [
          /* @__PURE__ */ jsx("h2", { children: "Swipe" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "app/assets/nav/ArrowRight.png",
              alt: "right arrow",
              className: "w-4 h-4"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:relative mt-5 md:flex items-center gap-x-1", children: [
          /* @__PURE__ */ jsx("h2", { children: "Scroll" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "app/assets/nav/ArrowRight.png",
              alt: "right arrow",
              className: "w-4 h-4"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ArtCategory,
  loader,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function HNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("nav", { className: "relative flex items-center justify-between pt-16 mx-[10%] z-20 text-purple", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", className: "text-2xl md:text-3xl font-medium no-underline hover:text-dark_purple", children: "Amy Wang" }),
    /* @__PURE__ */ jsxs("div", { className: "md:hidden", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(!isOpen), children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "app/assets/nav/menuIconP.png",
          className: `w-6 h-6 mr-6 ${isOpen ? "hidden" : "block"}
            absolute top-[68px] -right-5`
        }
      ) }),
      /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(!isOpen), children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "app/assets/nav/closeIconP.png",
          className: `w-6 h-6 mr-6 ${isOpen ? "block" : "hidden"}
            absolute top-[68px] -right-5`
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `${isOpen ? "block" : "md:flex scale-y-0 md:scale-100"} 
        relative md:static flex flex-col md:flex-row md:gap-[47px] text-right transition-all duration-500
        
        `, children: /* @__PURE__ */ jsxs("div", { className: "absolute md:static flex flex-col md:flex-row gap-2 md:gap-[47px]\n        top-7 right-4 overflow-hidden md:overflow-auto", children: [
      [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
      ].map((link) => /* @__PURE__ */ jsx(
        "a",
        {
          href: link.href,
          className: `md:text-2xl text-purple hover:text-dark_purple`,
          children: link.name
        },
        link.name
      )),
      /* @__PURE__ */ jsx(
        Link,
        {
          className: `md:text-2xl text-purple hover:text-dark_purple`,
          to: "/art",
          children: "Art"
        }
      )
    ] }) })
  ] });
}
const Hero = () => {
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col-reverse md:flex-row items-center justify-center \n        md:justify-between md:mt-12 z-10 mx-[10%] h-[70vh]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center md:text-left md:items-start text-[#7371FC] z-10 md:pr-20", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl font-semibold mb-6 md:mb-8", children: "Hi, I’m Amy" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl md:text-[28px] mb-8 md:mb-12 leading-8 md:leading-10 font-light", children: "I’m a second year studying Computer Science and Media Arts at Northeastern University. Reach out if you’d like to learn more!" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "mailto:acwng2@gmail.com",
          className: "no-underline bg-purple hover:bg-dark_purple text-white rounded-[100px] \n                                text-2xl md:text-3xl font-medium px-4 py-3 md:px-9 md:py-5 drop-shadow[0_0_4px_0_rgba(0,0,0,0.25)]",
          children: "Contact Me"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center my-8 md:my-0 md:flex-none z-10", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "app/assets/hero/heroImage.png",
        alt: "Cartoon version",
        className: "w-2/3 md:w-[500px] animate-float"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "absolute w-[48vw] h-[40vw] min-w-20 min-h-20 md:min-w-80 md:min-h-80 \n                            -top-16 -left-24 md:-top-64 md:-left-80 rounded-[764px] bg-[#cdc1ff]/[.7] blur-[50px] md:blur-[100px] z-0" }),
    /* @__PURE__ */ jsx("div", { className: "absolute w-[50vw] h-[50vw] min-w-20 min-h-20 md:min-w-80 md:min-h-64\n                            top-32 -right-32 md:top-32 md:-right-80 rounded-[764px] bg-[#cdc1ff]/[.7] blur-[50px] md:blur-[100px] z-0" })
  ] });
};
const About = () => {
  return /* @__PURE__ */ jsxs("div", { className: "relative bg-[#cdc1ff]/[.6] rounded-[15px] p-8 md:p-16 mt-16 md:mt-32 z-10 mx-[10%]", id: "about", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-bold tracking-wider md:tracking-[1.75px] uppercase text-purple", children: "About" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center -mt-12 md:mt-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "app/assets/about/aboutImage.png",
          alt: "Me sitting with a laptop",
          className: "ml-4 md:ml-0 w-16 md:w-80 md:mt-12"
        }
      ),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 md:mt-0 md:text-xl text-purple tracking-wide", children: [
        "Hi! Hallo! 你好！My name is Amy, and I’m currently studying Computer Science and Media Arts at Northeastern University. I’m a avid music listener, visual artist, nature lover, and frequent rater on Beli, Letterboxd, Strava, and Goodreads.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "As an avid reader, I am passionate about hearing the stories of others. In a post-digital age, it is imperative to remember that technology is and has always been a response to human stories, human challenges. As I gain more experience, both personal and professional, I look forward to creating solutions that not only perform efficiently but also remember the humanity behind the problems we need to solve. I'd love to connect - please reach out!"
      ] })
    ] })
  ] });
};
const languages = [
  {
    title: "Java",
    imageSrc: "app/assets/skills/java.png"
  },
  {
    title: "Python",
    imageSrc: "app/assets/skills/python.png"
  },
  {
    title: "JavaScript",
    imageSrc: "app/assets/skills/javascript.webp"
  },
  {
    title: "TypeScript",
    imageSrc: "app/assets/skills/typescript.png"
  },
  {
    title: "Ruby",
    imageSrc: "app/assets/skills/ruby.png"
  },
  {
    title: "Racket",
    imageSrc: "app/assets/skills/racket.svg"
  },
  {
    title: "HTML",
    imageSrc: "app/assets/skills/html.png"
  },
  {
    title: "CSS",
    imageSrc: "app/assets/skills/css.png"
  }
];
const history = [
  {
    role: "Teaching Assistant",
    organisation: "Khoury College of Computer Sciences",
    startDate: "Sep 2024",
    endDate: "Present",
    experiences: [
      "Provided additional one-on-one tutoring to students in need",
      "Facilitated weekly labs and conducted office hours to reinforce course concepts",
      "Graded homework assignments, proctored & evaluated exams"
    ],
    imageSrc: "app/assets/history/khoury_college_logo.jpeg"
  },
  {
    role: "Software Developer",
    organisation: "Code4Community",
    startDate: "Sep 2024",
    endDate: "Present",
    experiences: [
      "Built the Code4Community website using TypeScript, Tailwind CSS, and Prismic CMS integration",
      "Followed Agile/SCRUM methodology, utilizing weekly sprints and stand-up meetings"
    ],
    imageSrc: "app/assets/history/code_4_community_logo.jpeg"
  },
  {
    role: "Operations Team Member",
    organisation: "HackBeanpot",
    startDate: "Apr 2024",
    endDate: "Present",
    experiences: [
      "Coordinated logistics for keynote speakers and workshop leaders",
      "Planned and led club bonding activiites to strenthen team dynamics",
      "Contacted and organized food vendors for event of 200+ people"
    ],
    imageSrc: "app/assets/history/hackbeanpot_inc_logo.jpeg"
  }
];
const tools = [
  {
    title: "Git",
    imageSrc: "app/assets/skills/git.png"
  },
  {
    title: "React",
    imageSrc: "app/assets/skills/react.png"
  },
  {
    title: "Tailwind CSS",
    imageSrc: "app/assets/skills/tailwindcss.png"
  },
  {
    title: "Figma",
    imageSrc: "app/assets/skills/figma.png"
  },
  {
    title: "Adobe Suite",
    imageSrc: "app/assets/skills/adobe.png"
  },
  {
    title: "Maya",
    imageSrc: "app/assets/skills/maya.png"
  },
  {
    title: "Rails",
    imageSrc: "app/assets/skills/rails.png"
  },
  {
    title: "Docker",
    imageSrc: "app/assets/skills/docker.webp"
  },
  {
    title: "Flask",
    imageSrc: "app/assets/skills/flask.png"
  },
  {
    title: "SQL",
    imageSrc: "app/assets/skills/sql.svg"
  },
  {
    title: "MySQL",
    imageSrc: "app/assets/skills/mysql.png"
  },
  {
    title: "Prismic",
    imageSrc: "app/assets/skills/prismic.svg"
  }
];
const Experience = () => {
  return /* @__PURE__ */ jsx("div", { className: "mt-12 md:mt-20 mx-[10%] flex justify-evenly", id: "experience", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:mt-3.5 gap-9", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-nowrap", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-bold tracking-wider md:tracking-[1.75px] uppercase text-blue text-center md:text-start mb-8 md:mb-12", children: "Experience" }),
      /* @__PURE__ */ jsx("ul", { className: "w-full flex flex-col gap-12 md:gap-16", children: history.map((historyItem, id) => {
        return /* @__PURE__ */ jsxs("li", { className: "flex flex-col md:flex-row items-start md:items-center gap-4 \n                                bg-[linear-gradient(90deg,_#5ABAFA_0%,_rgba(90,_186,_250,_0.2)_18%,_#f0f7fc_100%)] \n                                rounded-[10px] p-6 text-blue", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: historyItem.imageSrc,
              alt: `${historyItem.organisation} Logo`,
              className: "hidden md:block md:static md:mt-0 md:ml-0 md:w-16 md:h-16"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "py-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-medium", children: `${historyItem.role}, ${historyItem.organisation}` }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 md:text-xl font-light", children: `${historyItem.startDate} - ${historyItem.endDate}` }),
            /* @__PURE__ */ jsx("ul", { className: "mt-4 list-inside md:text-xl ml-4 list-none", children: historyItem.experiences.map((experience, id2) => {
              return /* @__PURE__ */ jsx(
                "li",
                {
                  className: "relative pl-5 before:content-[''] before:absolute before:left-1 md:before:left-0 before:top-2 before:h-[8px] before:w-[8px] md:before:h-[12px] md:before:w-[12px] before:bg-bullet before:bg-cover",
                  children: experience
                },
                id2
              );
            }) })
          ] })
        ] }, id);
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:w-[75%] flex flex-wrap gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-bold tracking-wider md:tracking-[1.75px] uppercase text-blue text-center mb-8 md:mb-16", children: "Programming Languages" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 md:gap-5 justify-center", children: languages.map((language, id) => {
          return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-y-2.5", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-[#CEEAFE] rounded-[100%] flex items-center justify-center w-16 h-16 md:w-24 md:h-24 mx-2", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: language.imageSrc,
                alt: language.title,
                className: "w-10 md:w-14"
              }
            ) }),
            /* @__PURE__ */ jsx("p", { className: "md:text-xl font-medium text-blue", children: language.title })
          ] }, id);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-bold tracking-wider md:tracking-[1.75px] uppercase text-blue text-center mb-8 md:mb-16", children: "Frameworks and Tools" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 md:gap-5 justify-center", children: tools.map((tool, id) => {
          return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-y-2.5", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-[#CEEAFE] rounded-[100%] flex items-center justify-center w-16 h-16 md:w-24 md:h-24 mx-2", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: tool.imageSrc,
                alt: tool.title,
                className: "w-10 md:w-14"
              }
            ) }),
            /* @__PURE__ */ jsx("p", { className: "md:text-xl font-medium text-blue", children: tool.title })
          ] }, id);
        }) })
      ] })
    ] })
  ] }) });
};
const projects = [
  {
    title: "CoLink",
    imageSrc: "app/assets/projects/colink.png",
    description: "Built a data-driven application to foster community among Northeastern co-op students.",
    skills: [
      "Flask",
      "Streamlit",
      "MySQL"
    ],
    source: "https://github.com/amywng/CoLink"
  },
  {
    title: "Image Processor",
    imageSrc: "app/assets/projects/image-processor.png",
    description: "Developed an image editor using the MVC model, enabling features such as filtering, blurring, and flipping.",
    skills: [
      "Java",
      "Swing",
      "MVC"
    ],
    source: "https://github.com/amywng/imageprocessor"
  },
  {
    title: "Ars Electronica Facade",
    imageSrc: "app/assets/projects/ars-electronica.webp",
    description: "Developed a program to display an ongoing animation on the LED panel-based facade of Ars Electronica.",
    skills: [
      "Processing"
    ],
    source: "https://www.github.com/amywng/ars_electronica"
  },
  {
    title: "Climate Change Website",
    imageSrc: "app/assets/projects/climate-change.png",
    description: "Developed a website to inform and drive users to take action to combat climate change.",
    skills: [
      "JavaScript",
      "HTML",
      "CSS"
    ],
    source: "https://www.github.com/amywng/activistsite"
  }
];
const ProjectCard = ({
  title,
  imageSrc,
  description,
  skills,
  source
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-rows-3 rounded-[10px] shadow-[0_16px_14px_0_#2b6417] px-6 py-6 max-w-[250px] h-[450px] md:h-[550px]\n        bg-[linear-gradient(180deg,_rgba(249,_255,_225,_1)_0%,_#dbf5d1_100%)] text-green justify-center", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: imageSrc,
        alt: `Project ${title}`,
        className: "mb-7 h-[95px] md:h-[125px] object-cover"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "md:text-xl font-bold", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-1.5 md:text-lg font-light leading-5 md:leading-6", children: description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center -mt-2 md:mt-0", children: [
      /* @__PURE__ */ jsx("ul", { className: "w-full md:mt-4 flex flex-row flex-wrap justify-center gap-1 list-none", children: skills && skills.map((skill, id) => {
        return /* @__PURE__ */ jsx("li", { className: "md:text-lg rounded-[100px] bg-white px-3 py-0.5 md:px-4 md:py-1", children: skill }, id);
      }) }),
      /* @__PURE__ */ jsx("div", { className: "w-3/5 mt-3 flex justify-around bg-[#baeba8] hover:bg-[#94e078] rounded-[100px] py-0.5 md:py-1", children: /* @__PURE__ */ jsxs("a", { href: source, target: "_blank", className: "no-underline text-lg md:text-xl font-medium flex justify-center items-center gap-1", children: [
        "Source",
        /* @__PURE__ */ jsx("img", { src: "app/assets/projects/Newscreen.png", className: "w-4 h-4" })
      ] }) })
    ] })
  ] });
};
const Projects = () => {
  return /* @__PURE__ */ jsxs("section", { className: "mt-12 md:mt-20 mx-[10%]", id: "projects", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-bold tracking-wider md:tracking-[1.75px] uppercase text-green text-center md:text-start", children: "Projects" }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 md:mt-12 flex flex-row flex-wrap items-center justify-center gap-8 md:gap-3.5 w-full", children: projects.map((project, id) => {
      return /* @__PURE__ */ jsx(ProjectCard, { ...project }, id);
    }) })
  ] });
};
const Contact = () => {
  return /* @__PURE__ */ jsx("footer", { id: "contact", className: "text-white mt-12 md:mt-28 bg-green flex justify-end w-full md:w-screen px-[10%] pt-36 pb-16 items-center", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-row no-underline gap-5", children: [
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "a",
      {
        href: "mailto:acwng2@gmail.com",
        className: "text-white no-underline text-xl hover:text-dark_green",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "app/assets/contact/emailIcon.png",
            alt: "Email icon",
            className: "w-8 h-8"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://www.linkedin.com/in/amy-wang-17b526248/",
        target: "_blank",
        className: "text-white no-underline text-xl hover:text-dark_green",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "app/assets/contact/linkedinIcon.png",
            alt: "LinkedIn icon",
            className: "w-8 h-8"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://github.com/amywng",
        target: "_blank",
        className: "text-white no-underline text-xl hover:text-dark_green",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "app/assets/contact/githubIcon.png",
            alt: "Github icon",
            className: "w-8 h-8"
          }
        )
      }
    ) })
  ] }) });
};
const meta$1 = () => {
  return [
    { title: "Amy Wang" },
    { name: "description", content: "Welcome to my portfolio!" }
  ];
};
function Index$1() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(HNavbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center overflow-x-clip", children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Experience, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] })
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const Gallery = () => {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-5 pt-16 pb-16 md:pt-40 md:pb-0 md:pl-40", children: categories.map((category) => /* @__PURE__ */ jsx(
    "div",
    {
      className: "text-center",
      children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/${category.id}`,
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: category.image,
                alt: category.name,
                className: "w-40 h-40 md:w-[200px] md:h-[200px] object-cover"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "mt-2 ", children: category.name })
          ]
        }
      )
    },
    category.id
  )) });
};
const meta = () => {
  return [
    { title: "Art" },
    { name: "description", content: "A collection of my artwork" }
  ];
};
function Index() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(VNavbar, {}),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsx(Gallery, {}) })
  ] });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CAOBLxZ1.js", "imports": ["/assets/components-CcYNc9c2.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-kwqsH6gv.js", "imports": ["/assets/components-CcYNc9c2.js"], "css": ["/assets/root-93YpKFhJ.css"] }, "routes/$categoryId": { "id": "routes/$categoryId", "parentId": "root", "path": ":categoryId", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_categoryId-DxxczQ7M.js", "imports": ["/assets/components-CcYNc9c2.js", "/assets/vnavbar-BEHyk49B.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-ChyC4C29.js", "imports": ["/assets/components-CcYNc9c2.js"], "css": [] }, "routes/art": { "id": "routes/art", "parentId": "root", "path": "art", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/art-CRzj3XDm.js", "imports": ["/assets/components-CcYNc9c2.js", "/assets/vnavbar-BEHyk49B.js"], "css": [] } }, "url": "/assets/manifest-e79b20f4.js", "version": "e79b20f4" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "v3_routeConfig": false, "v3_singleFetch": true, "v3_lazyRouteDiscovery": true, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/$categoryId": {
    id: "routes/$categoryId",
    parentId: "root",
    path: ":categoryId",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/art": {
    id: "routes/art",
    parentId: "root",
    path: "art",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
