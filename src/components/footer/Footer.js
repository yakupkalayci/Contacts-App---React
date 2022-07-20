import "./style.css";

export default function Footer({theme}) {
    return (
        <footer style={theme === "dark" ? {backgroundColor:"rgb(46, 46, 46)"} : null}>
            <p>
                This app is an open-source project. To contribute please visit this link
                <a href="https://github.com/yakupkalayci/Contacts-App-React" target="_blank">Github</a>
            </p>
            <p>Created by <a href="https://github.com/yakupkalayci" target="_blank">Yakup Kalaycı</a></p>
        </footer>
    )
}