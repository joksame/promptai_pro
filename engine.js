function generatePrompts() {
  const type = document.getElementById("type").value;
  const topics = document.getElementById("topics").value.split(',');
  const style = document.getElementById("style").value;
  const tone = document.getElementById("tone").value;

  let allPrompts = "";

  topics.forEach(topic => {
    let t = topic.trim();
    if(!t) return;

    let prompt = "";
    if(type === "marketing"){
      prompt = `Write a marketing prompt for ${t} targeting ${style} with ${tone} tone.`;
    } else if(type === "design"){
      prompt = `Generate a design prompt for ${t} in style ${style} with ${tone}.`;
    } else if(type === "content"){
      prompt = `Create content about ${t} for ${style} with ${tone}.`;
    } else if(type === "programming"){
      prompt = `Write ${style} code that ${tone} for ${t} with explanation.`;
    }
    allPrompts += prompt + "\n\n";
  });

  document.getElementById("output").value = allPrompts;
}

function downloadPrompts() {
  const text = document.getElementById("output").value;
  const blob = new Blob([text], {type:"text/plain"});
  const link = document.createElement("a");
  link.download = "prompts.txt";
  link.href = window.URL.createObjectURL(blob);
  link.click();
}
