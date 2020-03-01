import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class CarSearcher {
  
	  public static double findMPG(String make, String model, String year) throws IOException
	  {
		  BufferedReader f = new BufferedReader(new FileReader("C:" + "\\\\Users\\Tang\\Desktop\\vehicles.csv"));

	    for (int i = 0; i < 42137; i++)
	    {
	    	String carInfo = f.readLine();
	    	String[] info = carInfo.split(",");
	    	if (info[46].equals(make) && info[47].equals(model) && info[63].equals(year))
	    	{
	    		// CURRENTLY ONLY RETURNING HIGHWAY MPG
	    		return Double.parseDouble(info[34]);
	    	}
	    }
	    return -1;
	  }
}
