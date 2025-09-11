// Initialize AOS (Animate On Scroll) library
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    easing: "ease-out",
    once: true,
    offset: 100,
  });

  // Initialize Owl Carousel
  const $carousel = $(".innovation-carousel");

  $carousel.owlCarousel({
    center: false,
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: false,
    startPosition: 0,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
  });

  // Highlight leftmost visible item
  function highlightFirstVisible() {
    $carousel.find(".innovation-card").removeClass("highlight-left");
    const firstVisible = $carousel
      .find(".owl-item.active")
      .first()
      .find(".innovation-card");
    firstVisible.addClass("highlight-left");
  }

  $carousel.on(
    "initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel",
    function () {
      setTimeout(highlightFirstVisible, 50);
    }
  );

  highlightFirstVisible();

  // Custom Nav Button Handlers
  $("#custom-prev").click(function () {
    $carousel.trigger("prev.owl.carousel");
  });

  $("#custom-next").click(function () {
    $carousel.trigger("next.owl.carousel");
  });

  // GCC Competitiveness Chart
  const ctx = document.getElementById("gccCompetitivenessChart");
  if (ctx) {
    // Create flag images for each country
    const flagImages = {};
    const countries = ["Kuwait", "Qatar", "Saudi Arabia", "Bahrain", "UAE"];
    const flagColors = {
      Kuwait: ["#007A3D", "#FFFFFF", "#CE1126"], // Green, White, Red
      Qatar: ["#8D1B3D", "#FFFFFF"], // Maroon, White
      "Saudi Arabia": ["#006C35", "#FFFFFF"], // Green, White
      Bahrain: ["#CE1126", "#FFFFFF"], // Red, White
      UAE: ["#00732F", "#FFFFFF", "#CE1126"], // Green, White, Red
    };

    // Create canvas elements for flags
    countries.forEach((country) => {
      const flagCanvas = document.createElement("canvas");
      flagCanvas.width = 32; // Increased from 24
      flagCanvas.height = 22; // Increased from 16
      const flagCtx = flagCanvas.getContext("2d");

      // Simple flag representations (scaled up)
      if (country === "Kuwait") {
        flagCtx.fillStyle = "#007A3D";
        flagCtx.fillRect(0, 0, 32, 7);
        flagCtx.fillStyle = "#FFFFFF";
        flagCtx.fillRect(0, 7, 32, 8);
        flagCtx.fillStyle = "#CE1126";
        flagCtx.fillRect(0, 15, 32, 7);
      } else if (country === "Qatar") {
        flagCtx.fillStyle = "#8D1B3D";
        flagCtx.fillRect(0, 0, 32, 22);
        flagCtx.fillStyle = "#FFFFFF";
        flagCtx.fillRect(0, 0, 11, 22);
      } else if (country === "Saudi Arabia") {
        flagCtx.fillStyle = "#006C35";
        flagCtx.fillRect(0, 0, 32, 22);
      } else if (country === "Bahrain") {
        flagCtx.fillStyle = "#CE1126";
        flagCtx.fillRect(0, 0, 32, 11);
        flagCtx.fillStyle = "#FFFFFF";
        flagCtx.fillRect(0, 11, 32, 11);
      } else if (country === "UAE") {
        flagCtx.fillStyle = "#CE1126";
        flagCtx.fillRect(0, 0, 11, 22);
        flagCtx.fillStyle = "#00732F";
        flagCtx.fillRect(11, 0, 21, 7);
        flagCtx.fillStyle = "#FFFFFF";
        flagCtx.fillRect(11, 7, 21, 8);
        flagCtx.fillStyle = "#000000";
        flagCtx.fillRect(11, 15, 21, 7);
      }

      flagImages[country] = flagCanvas;
    });

    // Data for GCC countries based on the image
    const chartData = {
      labels: countries,
      datasets: [
        {
          label: "World Competitiveness Ranking",
          data: [37, 21, 16, 11, 7], // Rankings from the image
          borderColor: "#4A90E2",
          backgroundColor: "rgba(74, 144, 226, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: "#4A90E2",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 2,
          pointRadius: 0, // Hide default points
          pointHoverRadius: 0,
        },
      ],
    };

    const config = {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            titleColor: "#ffffff",
            bodyColor: "#ffffff",
            borderColor: "#4A90E2",
            borderWidth: 1,
            displayColors: false,
            callbacks: {
              title: function (context) {
                return context[0].label;
              },
              label: function (context) {
                return `Ranking: ${context.parsed.y}${getOrdinalSuffix(
                  context.parsed.y
                )}`;
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
            reverse: false, // Normal direction - higher rankings at top
            beginAtZero: false,
            min: 5,
            max: 40,
            ticks: {
              display: false, // Hide Y-axis labels
            },
            grid: {
              color: "rgba(0, 0, 0, 0.05)",
              drawBorder: false,
            },
            title: {
              display: false, // Hide Y-axis title
            },
          },
          x: {
            ticks: {
              display: false, // Hide X-axis labels
            },
            grid: {
              display: false,
            },
            title: {
              display: false, // Hide X-axis title
            },
          },
        },
        elements: {
          point: {
            hoverBackgroundColor: "#4A90E2",
            hoverBorderColor: "#ffffff",
          },
        },
      },
    };

    // Helper function to add ordinal suffix (st, nd, rd, th)
    function getOrdinalSuffix(num) {
      const j = num % 10;
      const k = num % 100;
      if (j == 1 && k != 11) return "st";
      if (j == 2 && k != 12) return "nd";
      if (j == 3 && k != 13) return "rd";
      return "th";
    }

    // Function to draw flags on chart
    function drawFlags(chart) {
      const ctx = chart.ctx;

      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        meta.data.forEach((point, index) => {
          const country = chart.data.labels[index];
          const flagImage = flagImages[country];

          if (flagImage && point) {
            const x = point.x - 16; // Center the larger flag
            const y = point.y - 11;

            // Draw white circle background (larger)
            ctx.beginPath();
            ctx.arc(point.x, point.y, 18, 0, 2 * Math.PI);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.strokeStyle = "#4A90E2";
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw flag (larger size)
            ctx.drawImage(flagImage, x, y, 32, 22);

            // Draw ranking number above
            ctx.fillStyle = "#333";
            ctx.font = "bold 18px Dubai, Arial, sans-serif";
            ctx.textAlign = "center";
            const ranking = dataset.data[index];
            ctx.fillText(
              ranking + getOrdinalSuffix(ranking),
              point.x,
              point.y - 25
            );
          }
        });
      });
    }

    const chart = new Chart(ctx, config);

    // Add event listeners to redraw flags on hover interactions
    ctx.canvas.addEventListener("mousemove", function () {
      setTimeout(() => drawFlags(chart), 10);
    });

    ctx.canvas.addEventListener("mouseout", function () {
      setTimeout(() => drawFlags(chart), 10);
    });
  }

  

});

const chartCtx = document.getElementById("myChart");
if (chartCtx) {
  new Chart(chartCtx.getContext("2d"), {
    type: "bar",
    data: {
      labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2022"],
      datasets: [{
        label: "Values",
        data: [0.43, 0.10, 0.08, 0.08, 0.06, 0.19, 0.19, 0.08],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderRadius: 5
      }]
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
          formatter: (val) => val.toFixed(2)
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { 
            display: false,
           }
        }
      }
    },
    plugins: [ChartDataLabels]
  });

const menuToggle = document.getElementById("menuToggle");
    const navbarMenu = document.getElementById("navbarMenu");
    const header = document.querySelector(".header");

    menuToggle.addEventListener("click", function () {
      navbarMenu.classList.toggle("active");
      header.classList.toggle("active");
    });

    // Optional: close menu when link is clicked (mobile)
    document.querySelectorAll(".navbar-links a").forEach(link => {
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


