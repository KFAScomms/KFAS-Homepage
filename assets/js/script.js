// Initialize AOS (Animate On Scroll) library
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    easing: "ease-out",
    once: true,
    offset: 100,
  });

  // Initialize Owl Carousel
  // const $carousel = $(".innovation-carousel");

  // $carousel.owlCarousel({
  //   center: false,
  //   loop: true,
  //   margin: 20,
  //   nav: false,
  //   dots: false,
  //   autoplay: false,
  //   startPosition: 0,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     768: {
  //       items: 2,
  //     },
  //     1024: {
  //       items: 2,
  //     },
  //     1440: {
  //       items: 3,
  //     },
  //     2560: {
  //       items: 3,
  //     },
  //   },
  // });

  // // Highlight leftmost visible item
  // function highlightFirstVisible() {
  //   $carousel.find(".innovation-card").removeClass("highlight-left");
  //   const firstVisible = $carousel
  //     .find(".owl-item.active")
  //     .first()
  //     .find(".innovation-card");
  //   firstVisible.addClass("highlight-left");
  // }

  // $carousel.on(
  //   "initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel",
  //   function () {
  //     setTimeout(highlightFirstVisible, 50);
  //   }
  // );

  // highlightFirstVisible();

  // // Custom Nav Button Handlers
  // $("#custom-prev").click(function () {
  //   $carousel.trigger("prev.owl.carousel");
  // });

  // $("#custom-next").click(function () {
  //   $carousel.trigger("next.owl.carousel");
  // });


  // const $carousels = $(".innovation-carousel-1");

  // $carousels.owlCarousel({
  //   center: false,
  //   loop: true,
  //   margin: 20,
  //   nav: false,
  //   dots: false,
  //   autoplay: false,
  //   startPosition: 0,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     768: {
  //       items: 2,
  //     },
  //     1024: {
  //       items: 2,
  //     },
  //     1440: {
  //       items: 3,
  //     },
  //     2560: {
  //       items: 3,
  //     },
  //   },
  // });

  // // Highlight leftmost visible item
  // function highlightFirstVisible() {
  //   $carousels.find(".innovation-card").removeClass("highlight-left");
  //   const firstVisible = $carousel
  //     .find(".owl-item.active")
  //     .first()
  //     .find(".innovation-card");
  //   firstVisible.addClass("highlight-left");
  // }

  // $carousels.on(
  //   "initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel",
  //   function () {
  //     setTimeout(highlightFirstVisible, 50);
  //   }
  // );

  // highlightFirstVisible();

  // // Custom Nav Button Handlers
  // $("#custom-prev").click(function () {
  //   $carousels.trigger("prev.owl.carousel");
  // });

  // $("#custom-next").click(function () {
  //   $carousels.trigger("next.owl.carousel");
  // });

  $(document).ready(function () {
  // ===== Carousel 1 =====
  const $carousel1 = $(".innovation-carousel");
  $carousel1.owlCarousel({
    center: false,
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: false,
    startPosition: 0,
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1024: { items: 1 },
      1440: { items: 2 },
      2560: { items: 3 },
    },
  });

  function highlightFirstVisible1() {
    $carousel1.find(".innovation-card").removeClass("highlight-left");
    const firstVisible = $carousel1
      .find(".owl-item.active")
      .first()
      .find(".innovation-card");
    firstVisible.addClass("highlight-left");
  }

  $carousel1.on(
    "initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel",
    function () {
      setTimeout(highlightFirstVisible1, 50);
    }
  );
  highlightFirstVisible1();

  $("#custom-prev-1").click(() => $carousel1.trigger("prev.owl.carousel"));
  $("#custom-next-1").click(() => $carousel1.trigger("next.owl.carousel"));


  // ===== Carousel 2 =====
  const $carousel2 = $(".innovation-carousel-1");
  $carousel2.owlCarousel({
    center: false,
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: false,
    startPosition: 0,
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1024: { items: 1 },
      1440: { items: 2 },
      2560: { items: 3 },
    },
  });

  function highlightFirstVisible2() {
    $carousel2.find(".innovation-card").removeClass("highlight-left");
    const firstVisible = $carousel2
      .find(".owl-item.active")
      .first()
      .find(".innovation-card");
    firstVisible.addClass("highlight-left");
  }

  $carousel2.on(
    "initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel",
    function () {
      setTimeout(highlightFirstVisible2, 50);
    }
  );
  highlightFirstVisible2();

  $("#custom-prev-2").click(() => $carousel2.trigger("prev.owl.carousel"));
  $("#custom-next-2").click(() => $carousel2.trigger("next.owl.carousel"));
});



  // const ctx = document.getElementById("gccCompetitivenessChart");
  // if (ctx) {
  //   // Country list
  //   const countries = ["UAE", "Qatar", "Saudi Arabia", "Bahrain", "Kuwait"];

  //   // Map country to PNG flag image paths
  //   const flagUrls = {
  //     UAE: "assets/img/Emirates.png",
  //     Qatar: "assets/img/Qatar.png", // ✅ ensure this is Qatar's flag, not Oman
  //     "Saudi Arabia": "assets/img/Saudi.png",
  //     Bahrain: "assets/img/Bahrain.png",
  //     Kuwait: "assets/img/kuwaitflag.png",
  //   };

  //   // Preload images
  //   const flagImages = {};
  //   let loadedImages = 0;

  //   countries.forEach((country) => {
  //     const img = new Image();
  //     img.src = flagUrls[country];
  //     img.onload = () => {
  //       loadedImages++;
  //       if (loadedImages === countries.length) {
  //         chart.update(); // redraw chart once all flags loaded
  //       }
  //     };
  //     flagImages[country] = img;
  //   });

  //   // Data for GCC countries
  //   // Data for GCC countries
  //   const chartData = {
  //     labels: countries,
  //     datasets: [
  //       {
  //         label: "World Competitiveness Ranking",
  //         data: [7, 11, 16, 21, 37], // Rankings
  //         borderColor: "#4A90E2",
  //         backgroundColor: "rgba(74, 144, 226, 0.1)",
  //         borderWidth: 3,
  //         fill: true,
  //         tension: 0.4,
  //         pointRadius: 14, // invisible hover hitbox
  //         pointHoverRadius: 18, // hover area a bit larger
  //         pointBackgroundColor: "transparent",
  //         pointBorderColor: "transparent",
  //       },
  //     ],
  //   };

  //   const config = {
  //     type: "line",
  //     data: chartData,
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       plugins: {
  //         legend: { display: false },
  //         tooltip: {
  //           backgroundColor: "rgba(0, 0, 0, 0.8)",
  //           titleColor: "#fff",
  //           bodyColor: "#fff",
  //           borderColor: "#4A90E2",
  //           borderWidth: 1,
  //           displayColors: false,
  //           callbacks: {
  //             title: (context) => context[0].label,
  //             label: (context) =>
  //               `Ranking: ${context.parsed.y}${getOrdinalSuffix(
  //                 context.parsed.y
  //               )}`,
  //           },
  //         },
  //       },
  //       animation: {
  //         onComplete: function () {
  //           drawFlags(this);
  //         },
  //         onProgress: function () {
  //           drawFlags(this);
  //         },
  //       },
  //       scales: {
  //         y: {
  //           min: 5,
  //           max: 40,
  //           ticks: { display: false },
  //           grid: { color: "rgba(0,0,0,0.05)", drawBorder: false },
  //         },
  //         x: {
  //           ticks: { display: false },
  //           grid: { display: false },
  //         },
  //       },
  //     },
  //   };

  //   // Helper: ordinal suffix
  //   function getOrdinalSuffix(num) {
  //     const j = num % 10,
  //       k = num % 100;
  //     if (j == 1 && k != 11) return "st";
  //     if (j == 2 && k != 12) return "nd";
  //     if (j == 3 && k != 13) return "rd";
  //     return "th";
  //   }


  //   // Draw PNG flags
  //   function drawFlags(chart) {
  //     const ctx = chart.ctx;
  //     chart.data.datasets.forEach((dataset, datasetIndex) => {
  //       const meta = chart.getDatasetMeta(datasetIndex);
  //       meta.data.forEach((point, index) => {
  //         const country = chart.data.labels[index];
  //         const flagImage = flagImages[country];

  //         if (flagImage && point) {
  //           const radius = 16; // circle radius
  //           const x = point.x;
  //           const y = point.y;

  //           // White circle background
  //           ctx.beginPath();
  //           ctx.arc(x, y, radius + 2, 0, 2 * Math.PI);
  //           ctx.fillStyle = "white";
  //           ctx.fill();
  //           ctx.strokeStyle = "#4A90E2";
  //           ctx.lineWidth = 2;
  //           ctx.stroke();

  //           // Clip the flag into a circle
  //           ctx.save();
  //           ctx.beginPath();
  //           ctx.arc(x, y, radius, 0, 2 * Math.PI);
  //           ctx.closePath();
  //           ctx.clip();

  //           // Draw flag (scaled to circle)
  //           ctx.drawImage(
  //             flagImage,
  //             x - radius,
  //             y - radius,
  //             radius * 2,
  //             radius * 2
  //           );

  //           ctx.restore();

  //           // Draw ranking above
  //           ctx.fillStyle = "#333";
  //           ctx.font = "bold 16px Arial, sans-serif";
  //           ctx.textAlign = "center";
  //           const ranking = dataset.data[index];
  //           ctx.fillText(
  //             ranking + getOrdinalSuffix(ranking),
  //             x,
  //             y - radius - 12
  //           );
  //         }
  //       });
  //     });
  //   }

  //   // Draw PNG flags

  //   // Create chart
  //   const chart = new Chart(ctx, config);

  //   // Redraw on hover
  //   ctx.canvas.addEventListener("mousemove", () =>
  //     setTimeout(() => drawFlags(chart), 10)
  //   );
  //   ctx.canvas.addEventListener("mouseout", () =>
  //     setTimeout(() => drawFlags(chart), 10)
  //   );
  // }
const ctx = document.getElementById("gccCompetitivenessChart");
if (ctx) {
  const countries = ["UAE", "Bahrain", "Saudi Arabia", "Qatar", "Kuwait"];

  const rankings = {
    UAE: 7,
    Bahrain: 11,
    "Saudi Arabia": 16,
    Qatar: 21,
    Kuwait: 37,
  };

  const flagUrls = {
    UAE: "assets/img/Emirates.png",
    Qatar: "assets/img/Qatar.png",
    "Saudi Arabia": "assets/img/Saudi.png",
    Bahrain: "assets/img/Bahrain.png",
    Kuwait: "assets/img/kuwaitflag.png",
  };

  const flagImages = {};
  let loadedImages = 0;

  countries.forEach((country) => {
    const img = new Image();
    img.src = flagUrls[country];
    img.onload = () => {
      loadedImages++;
      if (loadedImages === countries.length) {
        chart.update();
      }
    };
    flagImages[country] = img;
  });

  const chartData = {
    labels: countries,
    datasets: [
      {
        label: "World Competitiveness Ranking",
        data: countries.map((c) => rankings[c]),
        borderColor: "transparent",
        backgroundColor: "transparent",
        borderWidth: 0,
        fill: false,
        tension: 0,
        pointRadius: 14,
        pointHoverRadius: 18,
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
      },
    ],
  };

  const config = {
    type: "line",
    data: chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          titleColor: "#fff",
          bodyColor: "#fff",
          borderColor: "#4A90E2",
          borderWidth: 1,
          displayColors: false,
          padding: 10,
          callbacks: {
            title: (context) => context[0].label,
            label: (context) => {
              const country = context.label;
              const ranking = context.parsed.y;
              return `${country}: ${ranking}${getOrdinalSuffix(ranking)} place`;
            },
          },
        },
      },
      animation: {
        onComplete: function () {
          drawFlags(this);
        },
        onProgress: function () {
          drawFlags(this);
        },
      },
      scales: {
        y: {
          min: 5,
          max: 40,
          reverse: true,
          ticks: { display: false },
          grid: { display: false },
          border: { display: false },
        },
        x: {
          ticks: { display: false },
          grid: { display: false },
          border: { display: false },
        },
      },
    },
  };

  function getOrdinalSuffix(num) {
    const j = num % 10,
      k = num % 100;
    if (j == 1 && k != 11) return "st";
    if (j == 2 && k != 12) return "nd";
    if (j == 3 && k != 13) return "rd";
    return "th";
  }

  // 🏁 Draw flags, rank, and country names
  function drawFlags(chart) {
    const ctx = chart.ctx;
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      meta.data.forEach((point, index) => {
        const country = chart.data.labels[index];
        const flagImage = flagImages[country];

        if (flagImage && point) {
          const radius = 14;
          const x = point.x;
          const y = point.y;

          // Circle background
          ctx.beginPath();
          ctx.arc(x, y, radius + 3, 0, 2 * Math.PI);
          ctx.fillStyle = "white";
          ctx.fill();
          ctx.strokeStyle = "#4A90E2";
          ctx.lineWidth = 2;
          ctx.stroke();

          // Flag inside circle
          ctx.save();
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(flagImage, x - radius, y - radius, radius * 2, radius * 2);
          ctx.restore();

          // Rank above
          const ranking = dataset.data[index];
          ctx.fillStyle = "#333";
          ctx.font = "bold 13px Arial, sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(ranking + getOrdinalSuffix(ranking), x, y - radius - 10);

          // ✅ Country name beside flag (right side)
          ctx.fillStyle = "#333";
          ctx.font = "12px Arial, sans-serif";
          ctx.textAlign = "left";
          ctx.fillText(country, x + radius + 8, y + 4);
        }
      });
    });
  }

  const chart = new Chart(ctx, config);

  // Redraw flags when hovering (tooltip refresh)
  ctx.canvas.addEventListener("mousemove", () =>
    setTimeout(() => drawFlags(chart), 10)
  );
  ctx.canvas.addEventListener("mouseout", () =>
    setTimeout(() => drawFlags(chart), 10)
  );
}




});

const chartCtx = document.getElementById("myChart");
if (chartCtx) {
  new Chart(chartCtx.getContext("2d"), {
    type: "bar",
    data: {
      labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2022"],
      datasets: [
        {
          label: "Values",
          data: [0.43, 0.1, 0.08, 0.08, 0.06, 0.19, 0.19, 0.08],
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        datalabels: {
          anchor: "end",
          align: "start",
          color: "#000",
          font: { weight: "bold" },
          formatter: (val) => val.toFixed(2),
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            display: false,
          },
        },
      },
    },
    plugins: [ChartDataLabels],
  });

  const menuToggle = document.getElementById("menuToggle");
  const navbarMenu = document.getElementById("navbarMenu");
  const header = document.querySelector(".header");

  menuToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
    header.classList.toggle("active");
  });

  // Optional: close menu when link is clicked (mobile)
  document.querySelectorAll(".navbar-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("active");
      header.classList.remove("active");
    });
  });
}

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
