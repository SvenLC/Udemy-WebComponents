import { h, Component, Prop, State } from '@stencil/core';


@Component({
    tag: 'uc-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer {
    @State() showContactInfo = false;
    @Prop({ reflect: true }) title: string;
    @Prop({ reflect: true }) open: boolean;

    onCloseDrawer() {
        this.open = false;
    }

    onContentChange(content: string) {
        this.showContactInfo = content === 'contact';
    }

    render() {
        let mainContent = <slot />;
        if (this.showContactInfo) {
            mainContent = (
                <div id="contact-information">
                    <h2>Contact Information</h2>
                    <p>You can reach us via phone or email.</p>
                    <ul>
                        <li>Phone: 49802384032</li>
                        <li>E-Mail: <a href="mailto:something@something.com">something@something.com</a></li>
                    </ul>
                </div>

            )
        }

        return (
            <aside>
                <header>
                    <h1>{this.title}</h1>
                    <button onClick={this.onCloseDrawer.bind(this)}>X</button>
                </header>
                <section id="tabs">
                    <button
                        class={!this.showContactInfo ? 'active' : ''}
                        onClick={this.onContentChange.bind(this, 'nav')}
                    >
                        Navigation
                    </button>
                    <button
                        class={this.showContactInfo ? 'active' : ''}
                        onClick={this.onContentChange.bind(this, 'contact')}
                    >
                        Contact
                    </button>
                </section>
                <main>
                    {mainContent}
                </main>
            </aside>
        );
    }
}