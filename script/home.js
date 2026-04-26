const cardContainer = document.getElementById("cardContainer");

const fetchApi = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => {
      cardsDisplay(data.data);
    });
};

const cardsDisplay = (cards) => {
  cards.forEach((card) => {
    const cardData = document.createElement("div");

    cardData.innerHTML = `
        <div class="duration-300 hover:-translate-y-1  ">
          <!-- first -->
        <div
          class="bg-[#EFEFEF] border-t-4 border-b-2 border-b-[#E4E4E7] border-[#00A96E] rounded-t-lg p-4 "
        >
          <!-- card status -->
          <div class="flex justify-between mb-4">
            <div>
              <img src="assets/Open-Status.png" alt="#" />
            </div>
            <div>
              <button
                class="bg-[#ffc9c9] text-[#EF4444] px-6.5 py-1 rounded-full"
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
              class="bg-[#ffc9c9] text-[#EF4444] border-2 border-[#f89a9a] px-2 py-1 rounded-full"
            >
              ${card.labels[0]}
            </button>
            <button
              class="bg-[#FFF8DB] text-[#D97706] border-2 border-[#FDE68A] px-2 py-1 rounded-full"
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
        cardContainer.appendChild(cardData)
  });
};

fetchApi();
