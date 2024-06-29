import React from "react";
import img1 from '../Servicepics/Restaurant1.jpg';
import img2 from '../Servicepics/bar1.jpg';
import img3 from '../Servicepics/spa1.jpg';
import img4 from '../Servicepics/Swimming Pool.jpg';
import img5 from '../Servicepics/Gym.jpg';
import img6 from '../Servicepics/Playing Area.jpg';




function Services() {
    return (
        <div className="Services">
            <div>

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />

                <div className="m-4" style={{padding:'50px 100px'}}>
                    <div className="card" style={{width: '1250px', height: '270px'}}>
                        <div className="row g-0">
                            <div className="col-sm-5">
                                <img src={img1} width={500} height={270} />
                            </div>
                            <div className="col-sm-7">
                                <div className="card-body">
                                    <h5 className="card-title">Restaurant</h5>
                                    <p className="card-text"> It's our pride! Back from the sightseeing, a bike ride in our beautiful surroundings or from a shopping session you would definitely enjoy to relax at the table and taste a good wine and great food.The imagination of our chefs will never bore you with always different and delicious dishes.The attention in choice of genuine and local ingredients will relax youThe accurate service, the elegance of our dining halls will make you feel at ease.The availability of our friendly staff will pamper you.You will always have a wide choice of vegetables on the buffet to be seasoned with oil of our land.You can always choose meat or fish courses or one of ours delicious dishes, a soup or a cold dish.As the last course you can always choose between fresh fruit, a fruit salad, ice cream or a dessert prepared by our pastry chef.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="m-4" style={{padding:'-100px -50px'}}>
                        <div className="card" style={{width: '1250px', height: '290px'}}>
                            <div className="row g-0">
                                <div className="col-sm-6">
                                    <div className="card-body">
                                        <h5 className="card-title">Bar</h5>
                                        <p className="card-text">Enjoy a drink in our spacious bar, is a truly enjoyable experience – the views of the natural harbour, no ships just a variety of birds and may be even spot a stray seal or penguin and then across the water with the opposite side comprising of natural terrain, with the names of ships picked out by natural stones will help to ensure that you will have a “relaxing drink”.There is a full range of bar drinks including a wide selection of spirits, Whisky, Brandy and Liqueurs, soft drinks and  beer including and Falkland Islands only real ale.  The wine list includes a variety and styles of wine including the famous Montes premium wine produced in Chile, with wines by the bottle and glass. </p>
                                    </div>
                                </div>
                                <div className="col-sm-5" >
                                    <img src={img2} alt="Bar" width={500} height={270} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="m-4" style={{padding:'-50px -100px'}}>
                        <div className="card" style={{width: '1250px', height: '270px'}}>
                            <div className="row g-0">
                                <div className="col-sm-5">
                                    <img src={img3} alt="Spa" width={500} height={270} />
                                </div>
                                <div className="col-sm-7">
                                    <div className="card-body">
                                        <h5 className="card-title">Spa</h5>
                                        <p className="card-text"> Our Spa typically offers luxurious spa facilities, signature spa treatments (massages, facials and body treatments) specific to that Spa only and a higher level of amenities and customer service (luxurious brand of Spa products and cosmetics, personal guidance through the Spa, tea service, etc.). Our Spa usually offers facilities like steam, sauna, fitness facilities, and a swimming pool. Even We offer exercise classes or a possibility to hire a personal trainer, a yoga teacher or a nutritionist. Often it is not only the Spa itself which is luxurious and designed with a specific Wellness-Style, but it is also the rooms which are decorated accordingly. It is all about rest and relaxation. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="m-4" style={{padding:'50px -100px'}}>
                        <div className="card" style={{width: '1250px', height: '270px'}}>
                            <div className="row g-0">
                                <div className="col-sm-7">
                                    <div className="card-body">
                                        <h5 className="card-title">Swimming Pool</h5>
                                        <p className="card-text">Ah, swimming pools. A glamorous image comes to mind, dipping your toes into the warm water while enjoying margaritas alone on the pool deck. Unfortunately, this dream is far from a realistic picture. In reality, pools are so often overwhelmed by cannonballs and screeching children. So how does one unwind poolside? By finding a pool with some privacy.Suits off for a skinny dip at Our hotel private pools for your next romantic gateway.</p>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <img src={img4} alt="Swimming Pool" width={500} height={270} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="m-4" style={{padding:'-50px -100px'}}>
                        <div className="card" style={{width: '1250px', height: '270px'}}>
                            <div className="row g-0">
                                <div className="col-sm-5">
                                    <img src={img5} alt="Gym" width={500} height={270} />
                                </div>
                                <div className="col-sm-7">
                                    <div className="card-body">
                                        <h5 className="card-title">Gym</h5>
                                        <p className="card-text">All guests over the age of 16 are invited to use our in-house hotel gym to exercise and unwind.With a mix of equipment and weights, our hotel gym will cater to you whether you want to do a cardio workout, or if you want to give your muscles some strength training or toning exercises.Once you’ve worked up a sweat, head to Haxells and replenish your energy before you take on the rest of the day. Packed with cardio and resistance equipment and free weights, you can unwind after a busy day in the capital at Royal Cherry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="m-4" style={{padding:'-50px -100px'}}>
                        <div className="card" style={{width: '1250px', height: '270px'}}>
                            <div className="row g-0">
                                <div className="col-sm-7">
                                    <div className="card-body">
                                        <h5 className="card-title">Playing Area</h5>
                                        <p className="card-text">One can play a variety of indoor games and be busy with many activities at the hotel.Our indoor activities include arcade games such as Chess, Chinese Checkers, Carrom Board etc. Some other activities include mini table tennis, Bowling Alley, arcade football and a mini pool table. </p>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <img src={img6} alt="Playing Area" width={500} height={270} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Services;
