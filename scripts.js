let selectedPhoto = '';

function selectPhoto(photo) {
    selectedPhoto = photo;
    document.getElementById('display-photo').src = photo;
    document.getElementById('display-photo').style.display = 'block';
}

function submitSelection() {
    const tableBody = document.getElementById('photo-table').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    const newCell = newRow.insertCell();
    const newImage = document.createElement('img');
    newImage.src = selectedPhoto;
    newImage.alt = 'Selected Photo';
    newCell.appendChild(newImage);
}