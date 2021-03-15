import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function HostingDetailPage(props) {
  const { hostingId } = useParams();
  const [hosting, setHosting] = useState(null);

    const { appendResidence } = useContext(ResidenceCon)
    const { appendAddress } = useContext(AddressContext)  
    const { appendAmenityResidencesId } = useContext(AmenitiesResidencesIdCon)
    const { appendPhoto} = useContext(PhotoContext)
    const { appendOwnersResidence} = useContext(OwnerResidenceContext)
    const { amenities } = useContext(AmenityContext)
    const { user } = useContext(UserContext);

    const [zip_code, setZipCode] = useState('');
    const [region, setRegion] = useState('');
    const [city_id, setCityId] = useState('');
    const [city, setCity] = useState('');
    const [street_name, setStreetName] = useState('')
    const [street_number, setStreetNumber] = useState('')
    const [apartment_number, setStreetApartment] = useState('')
    const [rooms, setRooms] = useState('')
    const [max_guests, setMax_guests] = useState('')
    const [price, setPrice] = useState('')
    const [message, setMessage] = useState();
    const [photos_list, setPhotosList] = useState();
    const [ready, setReadyMessage] = useState();
    const [visible, setVisible] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [ready_visible, setReadyVisible] = useState(false);
    const [citiesByRegion, setCitiesByRegion] = useState('')
    const onDismiss = () => setVisible(false);
    const [cSelected, setCSelected] = useState([]);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [images, setImages] = useState('');

    const filesChange = async fileList => {
        // handle file changes
        const formData = new FormData();
        var photos='';
        if (!fileList.length) return;

        // append the files to FormData
        Array.from(Array(fileList.length).keys())
        .map(x => {
            formData.append("files", fileList[x], fileList[x].name);
            photos = photos+fileList[x].name+' ';
        });

        let response = await fetch('/api/clearbnb/uploadfiles', {
            method: 'POST',
            body: formData
        }).catch(console.warn)

        response = await response.json()
        //console.log(response);
        setImages(response)
        setPhotosList(photos);
    }

    var someArrayOfStrings =[];
    someArrayOfStrings.map(opt => ({
        label: opt,
        value: opt
    }));

    const addCity = async() =>{
        toggle();

        const datas = {            
            country: 'Sverige',
            region: region,
            city: city
        }
        //console.log(datas.region+' '+datas.city)

        let res = await fetch('/api/clearbnb/allcities', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datas)
        })
        res = await res.json()
        //console.log(res)
        window.location.reload(false);
    }

    const addResidence = async (e) => {
        e.preventDefault()

        var user_id = user.id;
        var current_date = Math.floor(new Date().getTime()/1000.0);        

        const datas = {
            city_id,
            street_name,
            street_number,
            apartment_number,
            rooms,
            max_guests,
            price
            }
        //console.log(datas.city_id+'-'+datas.street_name+' '+datas.street_number+' '+datas.apartment_number+' '
        //            +datas.rooms+'-'+datas.max_guests+' '+datas.price);

        if((!datas.city_id) || (!datas.street_name) || (!datas.street_number) ||
                            (!datas.rooms) || (!datas.max_guests) || (!datas.price)
            ) {
            setMessage('All fields are mandatory!');
            setVisible(true);
            return
        }

        const address = {
            city_id, 
            zip_code,
            street_name,
            street_number,
            apartment_number
        }

        // send new address to backend
        let res = await fetch('/api/clearbnb/addresses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(address)
        })
        res = await res.json()

        //console.log(res)
        var address_id = res.id;
        appendAddress(res)

        const residence = {
            address_id, 
            rooms,
            price,
            max_guests
        }

        // send new residence to backend
        let newres = await fetch('/api/clearbnb/allresidences', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(residence)
        })
        newres = await newres.json()
        var residence_id = newres.id;
        //console.log(newres)

        appendResidence(newres)

        //OWNER
        const ownerresidence = {
            owner_id: user_id, 
            residence_id,
            start_date: current_date
        }

        // send new residence to backend
        let newowner = await fetch('/api/clearbnb/ownersresidences', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ownerresidence)
        })
        newowner = await newowner.json()

        //console.log(newowner)
        appendOwnersResidence(newowner)


        //AMENITIES
        const amenities = cSelected;
        //console.log('amenities:'+JSON.stringify(amenities));
        var end_date = 0; //Date.now();

        for(var i = 0; i < amenities.length; i++) {
            var amenity_id = amenities[i];
            const amenities_x_residences = {
                amenity_id,
                residence_id,
                start_date: current_date,
                end_date
            };   
            // send new residence to backend
            let newamxres = await fetch('/api/clearbnb/amxres', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(amenities_x_residences)
            })
            newamxres = await newamxres.json()
            appendAmenityResidencesId(newamxres)
        }

        //PHOTOS
        for(var i = 0; i < images.length; i++) {
            var photo_path = images[i];
            const photo = {
                residence_id, 
                path: photo_path
            }

            let photores = await fetch('/api/clearbnb/photos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(photo)
            })
            photores = await photores.json()
            //console.log(photores)
            appendPhoto(photores)
        }

        setReadyMessage('Bostaden är sparad');
        setReadyVisible(true);
        setDisabled(true);
    }

    //Cities By Region
    const formatGroupLabel = data => (
        <div className="groupStyles">
        <span>{data.label}</span>
        </div>
    );

    const CitiesSelect = () => {
        return (
            <div>
            <Select options={citiesByRegion} formatGroupLabel={formatGroupLabel} onChange = {opt => setCityId(opt.value)} 
            placeholder="Vilken ort?" isSearchable required />
            </div>
        )
    }

    useEffect(() => {
        const getRegions = async () => {
            let regions = await fetch('/api/clearbnb/allregions')
            regions = await regions.json()            
            //console.log(regions)
            let citiesArray = [];

            Array.from(Array(regions.length).keys())
            .map(x => {     
                fetch('/api/clearbnb/citiesbyregion/'+regions[x]).then(
                    function(response) {
                    if (response.status !== 200) {
                        console.log('Problem in fetching');
                        return;
                    }
                    response.json().then(function(data) {
                        citiesArray[citiesArray.length] = {
                            label: regions[x], options: data                          
                        }     
                    });                    
                }) 
                
            });  
            //console.log(citiesArray);
            setCitiesByRegion(citiesArray);
        }
        getRegions()        
    }, []);



    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
        cSelected.push(selected);
        } else {
        cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
    }

    const AmenitiesList = () => {
        return amenities.map((amenity, index) => {
            return (
            <Button outline className="ml-1 mb-1" color="primary" key={index} onClick={() => onCheckboxBtnClick(amenity.id)} active={cSelected.includes(amenity.id)}>{amenity.name}
            </Button>
            )
        })
    }

    if (user !== null) {
        return (
            <Container>
                <Card>
                    <CardImg className="card_img" top width="100%" src="/assets/livingroomwithcat.jpg" alt="" />
                    <CardBody>
                        <CardTitle><h2>new home</h2></CardTitle>
                        <div className="container">
                            <Alert className="mb-1 ml-2 mr-sm-0 mb-sm-0" color="warning" isOpen={ready_visible}>{ready}</Alert>
                        <Form 
                            onSubmit={addResidence}
                            >
                            <Row form>        
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="street_name">Ort 
                                        <Button className="ml-2 pb-0 pt-0" outline color="primary" size="sm" onClick={toggle}>+</Button>
                                        </Label>
                                        {CitiesSelect()}
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="zip_code">ZIP code</Label>
                                    <Input 
                                        required
                                        type="text" 
                                        id="zip_code" 
                                        placeholder=""
                                        value={zip_code}
                                        onChange={
                                        e => setZipCode(e.target.value)
                                        }
                                        disabled = {disabled}
                                    />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>Ny ort</ModalHeader>
                            <ModalBody>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Label>Region</Label>
                                        <Input required type="text" id="region" placeholder=""
                                            value={region} onChange={e => setRegion(e.target.value)}
                                            disabled = {disabled}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Label>Ort</Label>
                                        <Input required type="text" id="city" placeholder=""
                                            value={city} onChange={ e => setCity(e.target.value)}
                                            disabled = {disabled}/>
                                    </Col>
                                </Row>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={addCity}>Spara</Button>
                        <Button color="secondary" onClick={toggle}>Avbryt</Button>
                        </ModalFooter>
                    </Modal>
                            
                            <Row form>        
                                <Col md={4}>
                                    <FormGroup>
                                    <Label for="street_name">Streat</Label>
                                    <Input 
                                        required
                                        type="text" 
                                        id="street_name" 
                                        placeholder=""
                                        value={street_name}
                                        onChange={
                                        e => setStreetName(e.target.value)
                                        }
                                        disabled = {disabled}
                                    />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                    <Label for="street_number">houseNomber</Label>
                                    <Input
                                        required
                                        type="text" 
                                        id="street_number" 
                                        placeholder=""
                                        value={street_number}
                                        onChange={
                                        e => setStreetNumber(e.target.value)
                                        }
                                        disabled = {disabled}
                                    />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                    <Label for="apartment_number">Apartment</Label>
                                    <Input
                                        type="text" 
                                        id="apartment_number" 
                                        placeholder=""
                                        value={apartment_number}
                                        onChange={
                                        e => setStreetApartment(e.target.value)
                                        }
                                        disabled = {disabled}
                                    />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>        
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="rooms">How many rooms?</Label>
                                        <Input 
                                        required
                                        type="number" 
                                        id="rooms"
                                        value={rooms}
                                        onChange={
                                        e => setRooms(e.target.value)
                                        }
                                        disabled = {disabled}
                                    />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="max_guests">How many guests?</Label>
                                        <InputGroup>
                                            <Input
                                            value={max_guests}
                                            onChange={e=>setMax_guests(e.target.value)} 
                                            type="number"
                                            id="max_guests"
                                            disabled = {disabled}
                                            required  />
                                            <InputGroupAddon addonType="append">
                                                <InputGroupText>
                                                    <svg className="bi bi-person" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" 
                                                        clipRule="evenodd"/>
                                                    </svg>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                    <Label for="price">Price</Label>
                                    <InputGroup>
                                        <Input 
                                            required
                                            type="number" 
                                            id="price" 
                                            placeholder=""
                                            value={price}
                                            onChange={
                                            e => setPrice(e.target.value)
                                            }
                                            disabled = {disabled}
                                        />                    
                                        <InputGroupAddon addonType="append">
                                        <InputGroupText>Kr</InputGroupText>
                                    </InputGroupAddon>
                                    </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Row form>
                                    <Col md={12}>
                                        <div>
                                            <AmenitiesList></AmenitiesList>
                                        </div>
                                    </Col>
                                </Row>
                            </FormGroup>
                            {}
                            <FormGroup>
                                <Label>Upload photos</Label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01">
                                        uplaoding
                                        </span>
                                    </div>
                                    <div className="custom-file">
                                        <Input
                                        className="custom-file-input"
                                        type="file" 
                                        name="files"
                                        id="files" 
                                        accept=".png,.jpg,.jpeg,.gif,.bmp,.jfif" 
                                        multiple
                                        onChange={e => filesChange(e.target.files)}
                                        aria-describedby="inputGroupFileAddon01"
                                        />
                                        <label className="custom-file-label">
                                        Max 1 MB filstorlek
                                        </label>
                                    </div>
                                </div>
                                <div>{photos_list}</div>
                            </FormGroup>
                            <Button className="mt-4" color="info" size="lg" block disabled = {disabled}>Spara bostad</Button>
                            <Alert className="mb-1 ml-2 mr-sm-0 mb-sm-0" color="warning" isOpen={visible} toggle={onDismiss}>{message}</Alert>
                        </Form>     
                        </div>
                    </CardBody>
                </Card>
            </Container>
        )
    }
    else{
        return(
            <Container fluid>
                <Alert className="mb-1 ml-2 mr-sm-0 mb-sm-0" color="warning">You must log in.</Alert>
            </Container>
        )
    }
}

export default HostingDetailPage;