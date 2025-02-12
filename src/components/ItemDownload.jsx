import '../styles/Downloads.css'

function ItemDownload({ name, date, size }) {
    return (
        <div class="download-item">
            <div class="download-info">
                <span class="download-name">{name}</span>
                <span class="download-date">Downloaded: {date}</span>
                <span class="download-size">Size: {size}</span>
            </div>
            <button class="download-btn">Download Again</button>
        </div>

    )
}

export default ItemDownload