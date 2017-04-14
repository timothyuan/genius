import com.loopj.android.http.*;
import java.io.*;
import cz.msebera.android.httpclient.*;

public class Upload{
	public static void main(String[] args) {
	
	try {
	File file = new File("Downloads\\image1.jpg");
	RequestParams params = new RequestParams();
    params.put("file", file);
	AsyncHttpClient client = new AsyncHttpClient();
	client.post("/upload", params, new AsyncHttpResponseHandler() {

					@Override
                    public void onSuccess(int statusCode, Header[] headers, byte[] response) {
                        // called when response HTTP status is "200 OK"
                    }

                    @Override
                    public void onFailure(int statusCode, Header[] headers, byte[] errorResponse, Throwable e) {
                        // called when response HTTP status is "4XX" (eg. 401, 403, 404)
                    }
	});
	} catch(FileNotFoundException e) {}
	}
}

