import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'


function Footer() {
    return (
    <div className = "footer">
        <FontAwesomeIcon href="google.com" icon={["fab", "github-square"]}  size="xl" />
        <FontAwesomeIcon icon={["fab", "linkedin"]} size="xl" />
        
    </div>

    )
}

export default Footer;