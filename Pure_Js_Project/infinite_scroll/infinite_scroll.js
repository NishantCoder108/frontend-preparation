//https://www.algoexpert.io/api/testimonials?limit=5  ---five api calls

//https://www.algoexpert.io/api/testimonials?limit=5&after=45     ---and when give the, after =45 , id will show after the 45

const API_BASE_URL = "https://www.algoexpert.io/api/testimonials";
const PAGE_SIZE = 5;

let canFetchTestimonials = true;
let afterID = null;
const testimonialContainer = document.getElementById("testimonial-container");

testimonialContainer.addEventListener("scroll", handleScroll);
fetchAndAppendTestimonials();

function handleScroll() {
  if (!canFetchTestimonials) return;
  const bottomSpaceLeftToScroll =
    this.scrollHeight - this.scrollTop - this.clientHeight;

  if (bottomSpaceLeftToScroll > 0) return;
  fetchAndAppendTestimonials();
}

async function fetchAndAppendTestimonials() {
  canFetchTestimonials = false;
  const url = createTestimonialsUrl();
  const response = await fetch(url, {
    mode: 'no-cors',
  });
  const { testimonials, hasNext } = await response.text();
  console.log(testimonials)

  const fragment = document.createDocumentFragment();
  testimonials.forEach(({ message }) => {
    fragment.appendChild(createTestimonialElement(message)); //message append to fragment
  });

  testimonialContainer.appendChild(fragment);

  if (hasNext) {
    afterID = testimonials[testimonials.length - 1].id;
  } else {
    testimonialContainer.removeEventListener("scroll", handleScroll);
  }

  canFetchTestimonials = true;
}

//Create testimonials element
function createTestimonialElement(message) {
  const testimonialElement = document.createElement("p");
  testimonialElement.classList.add("testimonial");
  testimonialElement.textContent = message;

  return testimonialElement; //we create p tag and append to fragment and add to text content = message.
}

//Create Testimonials Url  ,it fetches data from url
function createTestimonialsUrl() {
  const url = new URL(API_BASE_URL);
  url.searchParams.set("limit", PAGE_SIZE); //url limit size of json
 console.log(url)

  if(afterID != null){
      url.searchParams.sett('after', afterID)
  }
  return url;
}
