import React from 'react';
import{
    Row,
    Col,
    Container
} from 'reactstrap';

const AboutPage =() =>{

    return(
        <div>
            <div>

                <container>
                    <Row>
                        <col>
                        <h1>
                            <b> About us</b>
                        </h1>
                       <section>
                        ClearBnB is a mockup product created during the School of Technology's education 
                        to try out how to create a website from the ground up with React
                        </section>
                        <h2> Teknikhögskolan Lund (group 5)</h2>
                        <h2> Qiling, Lukas, Johanna, Edvin, Hanan, Axel</h2>
                        <p>&copy;Teknikhögskolan, Lund</p>
                        </col>
                    </Row>
                </container>
            </div>
        </div>
    )

}
export default AboutPage;