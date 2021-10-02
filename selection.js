async function selection() {
  const bar = document.querySelectorAll(".bar");
  for (let i = 0; i < bar.length; i++) {
    console.log("in Ith Loop");
    let min_index = i;
    // Change color of the position to swap with the next min
    bar[i].style.background = "blue";

    for (let j = i + 1; j < bar.length; j++) {
      console.log("in Jth Loop");
      // change current bar color
      bar[j].style.background = "red";

      await waitforme(delay);
      //   console.log(parseInt(bar[j].style.height), bar[min_index].style.height);
   
        if(parseInt(bar[j].style.height) <  parseInt(bar[min_index].style.height))
        {
            if(min_index !== i){
                // new min_index is found so change prev min_index color back to normal
                bar[min_index].style.background = 'cyan';
            }
            min_index = j;    
        }
        else{
            // if the currnent comparision is more than min_index change is back to normal
            bar[j].style.background = 'cyan';
        }
    }
    await waitforme(delay);
        swap(bar[min_index], bar[i]);
        // change the min element index back to normal as it is swapped 
        bar[min_index].style.background = 'cyan';
        // change the sorted element  color to green
        bar[i].style.background = 'rgba(27, 255, 236, 0.438)';
  }
}

const selectionBtn = document.querySelector("#selection");
selectionBtn.addEventListener("click", selection);
