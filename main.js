const wrapper = document.querySelector(".wrapper");
const divContent1 = `<h2>Hello World!!</h2>
                    <p>My name is Excel.</p>`;
const divContent2 = `<h2>Hello World!!</h2>
                    <p>I'm Awesome </p>`;

wrapper.addEventListener("mouseover", event => {
  wrapper.innerHTML = divContent1;
  wrapper.style.transition = "0.5s linear";
  wrapper.style.cursor = "pointer";
  wrapper.style. transform = "scale(1.2)";
});

wrapper.addEventListener("mouseout", event => {
  wrapper.innerHTML = divContent2;
  wrapper.style.transition = "0.5s linear";
  wrapper.style.transition = "0.5s linear";
  wrapper.style. transform = "scale(1)";
});
