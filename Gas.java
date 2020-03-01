public class Gas {
	double gallonsForTotal;
	double totalMiles; //not user input
	double mpg; //not user input
	double gasAtOnce; //user
	//double buffer; //user
	double startingGal;//user
	double distanceTill1;
	double milesAtOnce;

	public Gas(double totalMiles, double mpg, double gasAtOnce, double startingGal)
	{
		this.totalMiles=totalMiles;
		this.mpg=mpg;
		this.gasAtOnce=gasAtOnce;
		this.startingGal=startingGal;
		milesAtOnce=gasAtOnce*mpg;
	}

	public double findGallons() //total gallons for 1 trip
	{
		gallonsForTotal = (totalMiles)/(mpg);
		return gallonsForTotal;
	}

	public double distanceTill1()
	{
		distanceTill1= startingGal * mpg;
		return distanceTill1;
	}

	public int numAtGasStations()
	{
		if(distanceTill1>totalMiles)
		{
			return 0;
		}
		double distanceLeft=totalMiles-distanceTill1;
		if(distanceLeft>milesAtOnce)
		{
			double numAtGasStations= (distanceLeft/milesAtOnce) + 1; //+1 is for distance till1
			return (int) numAtGasStations;
		}
		return 1;
	}

	public double totalMoneySpentGas(double avgMoneyPerGasStation)
	{

		return numAtGasStations()*avgMoneyPerGasStation;
	}
}
