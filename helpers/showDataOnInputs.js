export function showDataOnInputs(index, tasksList) {
    let { date, title, description } = tasksList[index];
    tdDate.value = date;
    tdTitle.value = title;
    tdDescription.value = description;
  }