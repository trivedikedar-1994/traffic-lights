import React from 'react';

const Footer = () => {
    return (
        <>
            <div class="footer-bottom d-flex flex-md-row flex-column align-items-center justify-content-between">
                <aside class="footer_menu footer_widget">
                    <ul class="menu_list d-flex flex-row align-items-center justify-content-start m-0 p-0 list-unstyled">
                        <li class="menu_item pe-3"><a href="https://leapsocial.com/app/terms-of-use/" title="Terms of Use">Terms of Use</a></li>
                        <li class="menu_item"><a href="https://leapsocial.com/app/privacy-policy/" title="Privacy Policy">Privacy Policy</a></li>
                    </ul>
                </aside>
                <aside class="footer_copyright footer_widget">
                    <small class="copyright">
                        <span>2022 Leap Social</span>
                    </small>
                </aside>
            </div>
        </>
    );
}
export default Footer;
