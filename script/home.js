const cardContainer = document.getElementById("cardContainer");
const loading = document.getElementById("loading");
const total = document.getElementById("total");
const searchBtn = document.getElementById("searchBtn");
let isLoading = true;

const fetchApi = () => {
  isLoading = true;
  loading.style.display = "flex";
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => {
      cardsDisplay(data.data);
      isLoading = false;
      loading.style.display = "none";
    });
};

const cardsDisplay = (cards) => {
  cardContainer.innerHTML = "";
  total.innerText = cards.length;
  cards.forEach((card) => {
    const cardData = document.createElement("div");

    cardData.innerHTML = `
        <div class="duration-300 hover:-translate-y-1  ">
          <!-- first -->
        <div
          class="bg-[#EFEFEF] border-t-4 border-b-2 border-b-[#E4E4E7] rounded-t-lg p-4 
          ${
            card.priority === "high"
              ? "border-[#00A96E]"
              : card.priority === "medium"
                ? "border-[#00A96E]"
                : "border-[#A855F7]"
          }"
        >
          <!-- card status -->
          <div class="flex justify-between mb-4">
            <div>
              ${card.priority === "low" ? `<img src="assets/Closed- Status .png" alt="#">` : ` <img src="assets/Open-Status.png" alt="#" />`}
            </div>
            <div>
              <button
                class="${
                  card.priority === "high"
                    ? "bg-[#ffc9c9] text-[#EF4444]"
                    : card.priority === "medium"
                      ? "bg-[#FFF6D1] text-[#F59E0B]"
                      : "bg-[#cfd1da] text-[#8a92a0]"
                } px-6 py-1 rounded-full"
              >
                ${card.priority}
              </button>
            </div>
          </div>
          <!-- Card Details -->
          <div>
            <h1
              class="text-[#1F2937] font-semibold text-lg mt-3 mb-2 capitalize"
            >
              ${card.title}
            </h1>
            <p class="text-[#64748B] font-normal text-sm mb-3">
              ${card.description}
            </p>
          </div>
          <!-- Card Issues type -->
          <div>
            <button
              class="
              ${
                card.labels[0] === "bug"
                  ? "bg-[#ffc9c9] text-[#EF4444] border-[#f89a9a]"
                  : card.labels[0] === "enhancement"
                    ? "bg-[#DEFCE8] text-[#00A96E]  border-[#73e69b]"
                    : "bg-[#bdbdff] text-[#0000FF]  border-[#0000ff63]"
              } 
                border-2  px-2 py-1 rounded-full"
            >
              ${card.labels[0]}
            </button>
            <button
              class="
              
              ${
                card.labels[1] === "help wanted"
                  ? "bg-[#ffebc6] text-[#FFA500] border-[#ffa60063]"
                  : card.labels[1] === "good first issue"
                    ? "bg-[#c5ffff] text-[#008080]  border-[#00808063]"
                    : card.labels[1] === "enhancement"
                      ? "bg-[#DEFCE8] text-[#00A96E]  border-[#73e69b]"
                      : "bg-[#cfd1da] text-[#8a92a0]  border-[#8a92a067]"
              } 
              
              
              border-2 px-1 py-1 rounded-full"
            >
              ${card.labels[1]}
            </button>
          </div>
        </div>
        <!-- second -->
        <div class="bg-[#EFEFEF] p-4 rounded-b-lg shadow-lg text-[#64748B]">
          <p class="pb-2">${card.createdAt}</p>
          <p>${card.updatedAt}</p>
        </div>
        </div>
        `;
    cardContainer.appendChild(cardData);
  });
};

// search function

const handleSearch = (searchValue) => {
  fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`,
  )
    .then((res) => res.json())
    .then((data) => cardsDisplay(data.data));
};

searchBtn.addEventListener("click", () => {
  const searchInput = document.getElementById("searchInput").value;
  handleSearch(searchInput);
});

// Add Enter key functionality for search
document.getElementById("searchInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const searchInput = document.getElementById("searchInput").value;
    handleSearch(searchInput);
  }
});

fetchApi();
