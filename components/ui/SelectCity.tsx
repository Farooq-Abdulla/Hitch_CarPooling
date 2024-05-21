
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

type CityType = {
    countryCode: string;
    latitude?: string | null | undefined;
    longitude?: string | null | undefined;
    name: string;
    stateCode: string;
}
const SelectCity = () => {


    // const [cities, setCities] = useState<CityType[]>([])
    // useEffect(() => {
    //     const fetchCities = async () => {
    //         const cities = await City.getCitiesOfCountry("US")
    //         if (cities) {
    //             setCities(cities)
    //         }
    //     }
    //     fetchCities()
    // }, [])
    // console.log(cities)
    return (
        <Select>
            <SelectTrigger className="w-full ">
                <SelectValue placeholder="Austin" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="5f2db8cd3d9069115f28d040">College Station</SelectItem>

                <SelectItem value="5d794b047c213e60b8fc8eff">Dallas</SelectItem>
                <SelectItem value="5bc7aed6e7179a4377fda58e">Austin</SelectItem>
                <SelectItem value="5e8791490966840e32b1293a">Waco</SelectItem>
                <SelectItem value="5f18b8d9096684958ec3d11a">Fort Worth</SelectItem>
                <SelectItem value="5f19d5150966846c2d44723a">Thackerville</SelectItem>
                <SelectItem value="5e84e5287c213e3443f2c549">Oklahoma City</SelectItem>
                <SelectItem value="5bc7adc6e7179a4377fd994e">Houston</SelectItem>
                <SelectItem value="5e8b9fcb0966842426cd2b7f">San Marcos</SelectItem>
                <SelectItem value="5de5d9f1e7179a0d18dde2f9">San Antonio</SelectItem>
                <SelectItem value="5fd176141d1963691543eae0">Corpus Christi</SelectItem>
                <SelectItem value="5fd25ca81d1963691581206a">Beaumont</SelectItem>
                <SelectItem value="61169b3e37d2aeaa27927428">Miami</SelectItem>
                <SelectItem value="611afdc495577478ddea419a">Orlando</SelectItem>
                <SelectItem value="61203b0d9e5fc16d356ed27d">Tampa</SelectItem>
                <SelectItem value="6121336754663a00102e2d03">Jacksonville</SelectItem>
                <SelectItem value="6121342d6495fe0011954c1b">Gainesville</SelectItem>
                <SelectItem value="612134833330380011375de0">Fort Myers</SelectItem>
                <SelectItem value="612134dff7a417001263a99e">Sarasota</SelectItem>
                <SelectItem value="61213545cb6bac0012fea3b2">West Palm Beach</SelectItem>
                <SelectItem value="61213583b69b8c00116ed8c6">Port St. Lucie</SelectItem>
                <SelectItem value="612135e3d49992001161afa5">Daytona Beach</SelectItem>
                <SelectItem value="612a878e120fafb2831ac98c">The Villages</SelectItem>
                <SelectItem value="612a8811120fafb2831ac98d">Ocala</SelectItem>
                <SelectItem value="614297b7c50e384ce7c1dc65">Lakeland</SelectItem>
                <SelectItem value="618ab44447d70d001076d34b">Tallahassee</SelectItem>
                <SelectItem value="63bc4dee5fea6b95d7d479c0">Arlington</SelectItem>
                <SelectItem value="63f97e1ba0694176985f4570">Key West</SelectItem>
                <SelectItem value="65c14572d220cf1d77341936">Montgomery</SelectItem>
                <SelectItem value="65c14573d220cf1d77341943">Scottsdale</SelectItem>
                <SelectItem value="65c14572d220cf1d77341937">Birmingham</SelectItem>
                <SelectItem value="65c14573d220cf1d7734193e">Tucson</SelectItem>
                <SelectItem value="65c14573d220cf1d7734193b">Little Rock</SelectItem>
                <SelectItem value="65c14573d220cf1d7734193d">Phoenix</SelectItem>
                <SelectItem value="65c14573d220cf1d77341942">Glendale</SelectItem>
                <SelectItem value="65c14574d220cf1d7734194b">Colorado Springs</SelectItem>
                <SelectItem value="65c14575d220cf1d77341954">Centennial</SelectItem>
                <SelectItem value="65c14575d220cf1d77341955">Boulder</SelectItem>
                <SelectItem value="65c14575d220cf1d77341956">Washington</SelectItem>
                <SelectItem value="65c14575d220cf1d77341959">Columbus</SelectItem>
                <SelectItem value="65c1457ad220cf1d77341985">Manhattan</SelectItem>
                <SelectItem value="65c1457ad220cf1d7734198c">Baltimore</SelectItem>
                <SelectItem value="65c1457ad220cf1d7734198e">Towson</SelectItem>
                <SelectItem value="65c1457bd220cf1d77341996">East Lansing</SelectItem>
                <SelectItem value="65c1457bd220cf1d77341997">Allendale</SelectItem>
                <SelectItem value="65c1457cd220cf1d7734199c">St. Louis</SelectItem>
                <SelectItem value="65c1457cd220cf1d773419a0">Lee's Summit</SelectItem>
                <SelectItem value="65c1457cd220cf1d773419a1">Jackson</SelectItem>
                <SelectItem value="65c1457cd220cf1d773419a5">Charlotte</SelectItem>
                <SelectItem value="65c1457ed220cf1d773419b4">Lincoln</SelectItem>
                <SelectItem value="65c1457fd220cf1d773419c4">Athens</SelectItem>
                <SelectItem value="65c14580d220cf1d773419cd">Pittsburgh</SelectItem>
                <SelectItem value="65c14580d220cf1d773419ce">Allentown</SelectItem>
                <SelectItem value="65c14580d220cf1d773419d0">Charleston</SelectItem>
                <SelectItem value="65c14581d220cf1d773419d6">Memphis</SelectItem>
                <SelectItem value="65c14581d220cf1d773419d8">Chattanooga</SelectItem>
                <SelectItem value="65c14582d220cf1d773419e4">Chesapeake</SelectItem>
                <SelectItem value="65c14582d220cf1d773419e6">Richmond</SelectItem>
                <SelectItem value="65c14583d220cf1d773419e7">Newport News</SelectItem>
                <SelectItem value="65c14583d220cf1d773419e9">Hampton</SelectItem>
                <SelectItem value="65c14584d220cf1d773419f7">Pullman</SelectItem>
                <SelectItem value="65c14584d220cf1d773419fb">Morgantown</SelectItem>
                <SelectItem value="65c14573d220cf1d7734193c">Fayetteville</SelectItem>
                <SelectItem value="65c14572d220cf1d77341938">Mobile</SelectItem>
                <SelectItem value="65c14572d220cf1d77341935">Huntsville</SelectItem>
                <SelectItem value="65c14573d220cf1d77341941">Gilbert</SelectItem>
                <SelectItem value="65c14574d220cf1d77341944">Peoria</SelectItem>
                <SelectItem value="65c14576d220cf1d7734195d">Athens</SelectItem>
                <SelectItem value="65c14576d220cf1d77341960">Kennesaw</SelectItem>
                <SelectItem value="65c14578d220cf1d77341974">Evanston</SelectItem>
                <SelectItem value="65c1457bd220cf1d77341991">Warren</SelectItem>
                <SelectItem value="65c1457bd220cf1d7734199a">Rochester</SelectItem>
                <SelectItem value="65c1457dd220cf1d773419af">Chapel Hill</SelectItem>
                <SelectItem value="65c1457ed220cf1d773419b1">Boone</SelectItem>
                <SelectItem value="65c1457fd220cf1d773419c0">Toledo</SelectItem>
                <SelectItem value="65c1457fd220cf1d773419c2">Dayton</SelectItem>
                <SelectItem value="65c14580d220cf1d773419c8">Gresham</SelectItem>
                <SelectItem value="65c14583d220cf1d773419ee">Seattle</SelectItem>
                <SelectItem value="65c14584d220cf1d773419fa">Green Bay</SelectItem>
                <SelectItem value="65c14574d220cf1d7734194e">Lakewood</SelectItem>
                <SelectItem value="65c14575d220cf1d77341957">Newark</SelectItem>
                <SelectItem value="65c14576d220cf1d7734195e">South Fulton</SelectItem>
                <SelectItem value="65c14577d220cf1d7734196a">Rexburg</SelectItem>
                <SelectItem value="65c14577d220cf1d77341970">Springfield</SelectItem>
                <SelectItem value="65c14578d220cf1d77341979">South Bend</SelectItem>
                <SelectItem value="65c14579d220cf1d77341983">Topeka</SelectItem>
                <SelectItem value="65c1457ad220cf1d77341986">Louisville</SelectItem>
                <SelectItem value="65c1457cd220cf1d7734199d">Springfield</SelectItem>
                <SelectItem value="65c1457cd220cf1d773419a2">Mississippi State</SelectItem>
                <SelectItem value="65c1457dd220cf1d773419a6">Raleigh</SelectItem>
                <SelectItem value="65c1457dd220cf1d773419ab">Cary</SelectItem>
                <SelectItem value="65c1457dd220cf1d773419b0">Greenville</SelectItem>
                <SelectItem value="65c1457ed220cf1d773419b5">Albuquerque</SelectItem>
                <SelectItem value="65c1457ed220cf1d773419ba">North Las Vegas</SelectItem>
                <SelectItem value="65c14580d220cf1d773419d1">Columbia</SelectItem>
                <SelectItem value="65c14581d220cf1d773419da">Murfreesboro</SelectItem>
                <SelectItem value="65c14582d220cf1d773419dd">West Jordan</SelectItem>
                <SelectItem value="65c14582d220cf1d773419df">St. George</SelectItem>
                <SelectItem value="65c14583d220cf1d773419ed">Harrisonburg</SelectItem>
                <SelectItem value="65c14574d220cf1d77341947">Buckeye</SelectItem>
                <SelectItem value="65c14574d220cf1d77341949">Flagstaff</SelectItem>
                <SelectItem value="65c14576d220cf1d7734195f">Sandy Springs</SelectItem>
                <SelectItem value="65c14576d220cf1d77341963">Cedar Rapids</SelectItem>
                <SelectItem value="65c14576d220cf1d77341964">Davenport</SelectItem>
                <SelectItem value="65c14577d220cf1d77341966">Iowa City</SelectItem>
                <SelectItem value="65c14577d220cf1d77341968">Meridian</SelectItem>
                <SelectItem value="65c14579d220cf1d7734197d">Bloomington</SelectItem>
                <SelectItem value="65c1457ad220cf1d7734198b">Lafayette</SelectItem>
                <SelectItem value="65c1457bd220cf1d77341999">Saint Paul</SelectItem>
                <SelectItem value="65c1457cd220cf1d7734199f">Independence</SelectItem>
                <SelectItem value="65c1457dd220cf1d773419a9">Winston-Salem</SelectItem>
                <SelectItem value="65c1457dd220cf1d773419ad">High Point</SelectItem>
                <SelectItem value="65c1457fd220cf1d773419c7">Salem</SelectItem>
                <SelectItem value="65c14580d220cf1d773419cc">Philadelphia</SelectItem>
                <SelectItem value="65c14580d220cf1d773419cf">State College</SelectItem>
                <SelectItem value="65c14581d220cf1d773419d2">North Charleston</SelectItem>
                <SelectItem value="65c14581d220cf1d773419d5">Nashville</SelectItem>
                <SelectItem value="65c14582d220cf1d773419dc">West Valley City</SelectItem>
                <SelectItem value="65c14583d220cf1d773419ec">Charlottesville</SelectItem>
                <SelectItem value="65c14583d220cf1d773419ef">Spokane</SelectItem>
                <SelectItem value="65c14584d220cf1d773419f3">Kent</SelectItem>
                <SelectItem value="65c14574d220cf1d77341946">Surprise</SelectItem>
                <SelectItem value="65c14574d220cf1d77341948">Goodyear</SelectItem>
                <SelectItem value="65c14574d220cf1d7734194c">Aurora</SelectItem>
                <SelectItem value="65c14574d220cf1d7734194d">Fort Collins</SelectItem>
                <SelectItem value="65c14576d220cf1d7734195c">Savannah</SelectItem>
                <SelectItem value="65c14577d220cf1d7734196c">Aurora</SelectItem>
                <SelectItem value="65c14577d220cf1d7734196f">Rockford</SelectItem>
                <SelectItem value="65c14579d220cf1d7734197b">Carmel</SelectItem>
                <SelectItem value="65c14579d220cf1d7734197c">West Lafayette</SelectItem>
                <SelectItem value="65c1457ad220cf1d77341987">Lexington</SelectItem>
                <SelectItem value="65c1457ad220cf1d7734198a">Shreveport</SelectItem>
                <SelectItem value="65c1457cd220cf1d773419a3">University</SelectItem>
                <SelectItem value="65c1457dd220cf1d773419a7">Greensboro</SelectItem>
                <SelectItem value="65c1457dd220cf1d773419a8">Durham</SelectItem>
                <SelectItem value="65c1457dd220cf1d773419ae">Concord</SelectItem>
                <SelectItem value="65c1457ed220cf1d773419b6">Las Cruces</SelectItem>
                <SelectItem value="65c1457ed220cf1d773419b8">Las Vegas</SelectItem>
                <SelectItem value="65c1457ed220cf1d773419bc">Sparks</SelectItem>
                <SelectItem value="65c1457fd220cf1d773419be">Cleveland</SelectItem>
                <SelectItem value="65c1457fd220cf1d773419c1">Akron</SelectItem>
                <SelectItem value="65c14580d220cf1d773419c9">Hillsboro</SelectItem>
                <SelectItem value="65c14581d220cf1d773419d7">Knoxville</SelectItem>
                <SelectItem value="65c14582d220cf1d773419e1">Ogden</SelectItem>
                <SelectItem value="65c14583d220cf1d773419f1">Vancouver</SelectItem>
                <SelectItem value="65c14572d220cf1d7734193a">Auburn</SelectItem>
                <SelectItem value="65c14574d220cf1d77341945">Tempe</SelectItem>
                <SelectItem value="65c14574d220cf1d7734194a">Denver</SelectItem>
                <SelectItem value="65c14575d220cf1d77341951">Westminster</SelectItem>
                <SelectItem value="65c14575d220cf1d77341952">Pueblo</SelectItem>
                <SelectItem value="65c14575d220cf1d77341958">Atlanta</SelectItem>
                <SelectItem value="65c14576d220cf1d7734195b">Macon</SelectItem>
                <SelectItem value="65c14576d220cf1d77341961">Statesboro</SelectItem>
                <SelectItem value="65c14576d220cf1d77341962">Des Moines</SelectItem>
                <SelectItem value="65c14577d220cf1d77341967">Boise</SelectItem>
                <SelectItem value="65c14578d220cf1d77341976">Indianapolis</SelectItem>
                <SelectItem value="65c14579d220cf1d7734197e">Muncie</SelectItem>
                <SelectItem value="65c14579d220cf1d7734197f">Wichita</SelectItem>
                <SelectItem value="65c14579d220cf1d77341981">Kansas City</SelectItem>
                <SelectItem value="65c14579d220cf1d77341984">Lawrence</SelectItem>
                <SelectItem value="65c1457bd220cf1d77341993">Ann Arbor</SelectItem>
                <SelectItem value="65c1457cd220cf1d7734199e">Columbia</SelectItem>
                <SelectItem value="65c1457dd220cf1d773419aa">Fayetteville</SelectItem>
                <SelectItem value="65c1457ed220cf1d773419b7">Rio Rancho</SelectItem>
                <SelectItem value="65c1457ed220cf1d773419bb">Reno</SelectItem>
                <SelectItem value="65c14580d220cf1d773419cb">Corvallis</SelectItem>
                <SelectItem value="65c14581d220cf1d773419d3">Clemson</SelectItem>
                <SelectItem value="65c14583d220cf1d773419f2">Bellevue</SelectItem>
                <SelectItem value="65c14584d220cf1d773419f4">Everett</SelectItem>
                <SelectItem value="65c14584d220cf1d773419f5">Spokane Valley</SelectItem>
                <SelectItem value="65c14584d220cf1d773419f9">Madison</SelectItem>
                <SelectItem value="65c14573d220cf1d7734193f">Mesa</SelectItem>
                <SelectItem value="65c14573d220cf1d77341940">Chandler</SelectItem>
                <SelectItem value="65c14575d220cf1d7734194f">Thornton</SelectItem>
                <SelectItem value="65c14576d220cf1d7734195a">Augusta</SelectItem>
                <SelectItem value="65c14576d220cf1d77341965">Ames</SelectItem>
                <SelectItem value="65c14577d220cf1d77341969">Nampa</SelectItem>
                <SelectItem value="65c14577d220cf1d7734196b">Chicago</SelectItem>
                <SelectItem value="65c14577d220cf1d7734196d">Joliet</SelectItem>
                <SelectItem value="65c14577d220cf1d7734196e">Naperville</SelectItem>
                <SelectItem value="65c14578d220cf1d77341972">Peoria</SelectItem>
                <SelectItem value="65c14578d220cf1d77341975">Normal</SelectItem>
                <SelectItem value="65c14579d220cf1d77341980">Overland Park</SelectItem>
                <SelectItem value="65c1457ad220cf1d77341988">New Orleans</SelectItem>
                <SelectItem value="65c1457ad220cf1d7734198f">Detroit</SelectItem>
                <SelectItem value="65c1457bd220cf1d77341998">Minneapolis</SelectItem>
                <SelectItem value="65c1457cd220cf1d7734199b">Kansas City</SelectItem>
                <SelectItem value="65c1457cd220cf1d773419a4">Billings</SelectItem>
                <SelectItem value="65c1457ed220cf1d773419b3">Omaha</SelectItem>
                <SelectItem value="65c1457ed220cf1d773419b9">Henderson</SelectItem>
                <SelectItem value="65c1457fd220cf1d773419bd">Columbus</SelectItem>
                <SelectItem value="65c1457fd220cf1d773419bf">Cincinnati</SelectItem>
                <SelectItem value="65c1457fd220cf1d773419c3">Kent</SelectItem>
                <SelectItem value="65c1457fd220cf1d773419c5">Portland</SelectItem>
                <SelectItem value="65c14580d220cf1d773419ca">Bend</SelectItem>
                <SelectItem value="65c14581d220cf1d773419d9">Clarksville</SelectItem>
                <SelectItem value="65c14582d220cf1d773419de">Provo</SelectItem>
                <SelectItem value="65c14582d220cf1d773419e0">Orem</SelectItem>
                <SelectItem value="65c14582d220cf1d773419e5">Norfolk</SelectItem>
                <SelectItem value="65c14583d220cf1d773419f0">Tacoma</SelectItem>
                <SelectItem value="65c14584d220cf1d773419f6">Renton</SelectItem>
                <SelectItem value="65c14572d220cf1d77341939">Tuscaloosa</SelectItem>
                <SelectItem value="65c14575d220cf1d77341950">Arvada</SelectItem>
                <SelectItem value="65c14575d220cf1d77341953">Greeley</SelectItem>
                <SelectItem value="65c14578d220cf1d77341971">Elgin</SelectItem>
                <SelectItem value="65c14578d220cf1d77341973">Urbana</SelectItem>
                <SelectItem value="65c14578d220cf1d77341977">Fort Wayne</SelectItem>
                <SelectItem value="65c14578d220cf1d77341978">Evansville</SelectItem>
                <SelectItem value="65c14578d220cf1d7734197a">Fishers</SelectItem>
                <SelectItem value="65c14579d220cf1d77341982">Olathe</SelectItem>
                <SelectItem value="65c1457ad220cf1d77341989">Baton Rouge</SelectItem>
                <SelectItem value="65c1457ad220cf1d7734198d">College Park</SelectItem>
                <SelectItem value="65c1457bd220cf1d77341990">Grand Rapids</SelectItem>
                <SelectItem value="65c1457bd220cf1d77341992">Sterling Heights</SelectItem>
                <SelectItem value="65c1457bd220cf1d77341994">Lansing</SelectItem>
                <SelectItem value="65c1457bd220cf1d77341995">Dearborn</SelectItem>
                <SelectItem value="65c1457dd220cf1d773419ac">Wilmington</SelectItem>
                <SelectItem value="65c1457ed220cf1d773419b2">Fargo</SelectItem>
                <SelectItem value="65c1457fd220cf1d773419c6">Eugene</SelectItem>
                <SelectItem value="65c14581d220cf1d773419d4">Sioux Falls</SelectItem>
                <SelectItem value="65c14581d220cf1d773419db">Salt Lake City</SelectItem>
                <SelectItem value="65c14582d220cf1d773419e2">Logan</SelectItem>
                <SelectItem value="65c14582d220cf1d773419e3">Virginia Beach</SelectItem>
                <SelectItem value="65c14583d220cf1d773419e8">Alexandria</SelectItem>
                <SelectItem value="65c14583d220cf1d773419ea">Fairfax</SelectItem>
                <SelectItem value="65c14583d220cf1d773419eb">Blacksburg</SelectItem>
                <SelectItem value="65c14584d220cf1d773419f8">Milwaukee</SelectItem>
                <SelectItem value="66032b67fcfcce6de5424f54">Stillwater</SelectItem>
                <SelectItem value="66032b67fcfcce6de5424f55">Lubbock</SelectItem>
                <SelectItem value="66032b67fcfcce6de5424f56">Amarillo</SelectItem>
                <SelectItem value="66032b67fcfcce6de5424f57">El Paso</SelectItem>
                <SelectItem value="66032b67fcfcce6de5424f58">Fredericksburg</SelectItem>
                <SelectItem value="66032b67fcfcce6de5424f59">Lake Charles</SelectItem>
                <SelectItem value="66032b68fcfcce6de5424f5a">Destin</SelectItem>
                <SelectItem value="66032b68fcfcce6de5424f5b">Panama City</SelectItem>
                <SelectItem value="66032b68fcfcce6de5424f5c">Tulsa</SelectItem>


            </SelectContent>
        </Select>

    )
}

export default SelectCity



