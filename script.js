function generatePDF() {
    const element = document.getElementById("invoice");

    home()
        .from(element)
        .save();
}