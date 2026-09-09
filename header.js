// This class provides the header across all pages. That way we only have to edit it once.

class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <!-- Prepare the navigation bar. -->
                <nav class="navbar-expand navbar-dark bg-dark" aria-label="header">
                    <div class="container-fluid">
                        <!-- Add the title. -->
                        <a href="#" class="navbar-brand d-flex align-items-center">
                            <strong>Noah Lutz DSC402 Portfolio</strong>
                        </a>

                        <!-- Add all the page navigation layer. -->
                        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                            <!-- Add the link to the home page. -->
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/dsc402/">Home</a>
                            </li>

                            <!-- Add the visualizations drop down. -->
                            <li class="nav-item dropdown">
                                <a class="nav-link active dropdown-toggle" href="#" id="visualizations" data-bs-toggle="dropdown" aria-expanded="false">Visualizations</a>
                                <ul class="dropdown-menu" aria-labelledby="visualizations">
                                    <li><a class="dropdown-item" href="/dsc402/visualizations/basiccharts">1. Basic Chart</a></li>
                                </ul>
                            </li>

                            <!-- Add the link to the source code. -->
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="https://github.com/amnoah/dsc402">Source Code</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        `;
    }
}
customElements.define('main-header', MainHeader);