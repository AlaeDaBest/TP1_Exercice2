const profil=()=>{
    const Title=()=>{
        return (<section>
            <h2>Student Profile Page Design Example</h2>
            <h4>A Reponsive Student Profile Page Design</h4>
        </section>)
    }
    const Info=()=>{
        return (
            <div>
                <section class="PersonalInfo">
                    <article>
                        <img src="././Images/kuromi.png.png" alt="" />
                        <h3>Ishmam Ahasan</h3>
                    </article>
                    <article>
                        <ul>
                            <li><span>Student ID:</span>1234567</li>
                            <li><span>Class:</span>4</li>
                            <li><span>Section:</span>A</li>
                        </ul>
                    </article>
                </section>
                <section>
                    <article>
                        <h3>General Information</h3>
                        <table border="1px" rules="all" >
                            <tr>
                                <td>Roll</td>
                                <td>:</td>
                                <td>125</td>
                            </tr>
                            <tr>
                                <td>Academic Year</td>
                                <td>:</td>
                                <td>2020</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>:</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <td>Religion</td>
                                <td>:</td>
                                <td>Group</td>
                            </tr>
                            <tr>
                                <td>Blood</td>
                                <td>:</td>
                                <td>8+</td>
                            </tr>
                        </table>
                    </article>
                    <article>
                        <h3>Other Information</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi quia, temporibus commodi repellat velit quod doloribus eaque atque recusandae amet dolorem pariatur maiores incidunt fuga, odit voluptatum sed voluptatem.</p>
                    </article>
                </section>
            </div>
        )
    }
    return (
        <div>
            <Title/>
            <Info/>
        </div>
    )
}