const fullAccess = document.querySelector('.full_access');
const videoForm = document.getElementById('video_form');

videoForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    const description = document.getElementById('description').value;
    const link = document.getElementById('link').value;
    const videoDetails = {
        description: description,
        link: link
    };
    // const urlforbookmark = 'https://crudcrud.com/api/3f2da25a22c74b79b6aa82e475bc2892/bookmarkdata'

    createList(videoDetails);
    // axios.post(urlforbookmark, videoDetails)
    // .then((res) => {
    //     console.log("POST Response:", res.data);
    //     alert('Bookmark added successfully!');
    // })
    // .catch((err) => {
    //     console.error(err);
    //     alert('Failed to add bookmark. Please try again.');
    // });
    videoForm.reset();
});

function createList(objDetails) {
    const listItem = document.createElement('li');
    listItem.className = 'individual_access d-flex justify-content-between align-items-center';
    listItem.dataset.details = `${objDetails.description}|${objDetails.link}`;

    const detailsText = document.createElement('p');
    detailsText.textContent = `Details:\nDescription: ${objDetails.description}`;

    const linkElement = document.createElement('a');
    linkElement.href = objDetails.link.trim();
    linkElement.textContent = objDetails.link.trim();
    linkElement.target = '_blank';

    listItem.appendChild(detailsText);
    listItem.appendChild(linkElement);

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'btn-grp';

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'btn btn-warning btn-sm edit_button';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn btn-danger btn-sm delete_button';

    buttonGroup.appendChild(editButton);
    buttonGroup.appendChild(deleteButton);
    listItem.appendChild(buttonGroup);
    fullAccess.appendChild(listItem);
}