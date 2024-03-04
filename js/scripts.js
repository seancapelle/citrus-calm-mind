document.addEventListener('DOMContentLoaded', () => {
    const d = new Date()
    const currentYear = d.getFullYear()
    document.getElementById('date').append(currentYear)
})