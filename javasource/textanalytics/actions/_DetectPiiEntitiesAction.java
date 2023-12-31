// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package textanalytics.actions;

import java.math.BigDecimal;
import java.util.ArrayList;
import com.mendix.cognitiveservices.contracts.textanalytics.PiiEntity;
import com.mendix.cognitiveservices.contracts.textanalytics.PiiEntityType;
import com.mendix.cognitiveservices.contracts.textanalytics.Request;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class _DetectPiiEntitiesAction extends CustomJavaAction<java.util.List<IMendixObject>>
{
	private java.lang.String text;
	private java.lang.String languageCode;

	public _DetectPiiEntitiesAction(IContext context, java.lang.String text, java.lang.String languageCode)
	{
		super(context);
		this.text = text;
		this.languageCode = languageCode;
	}

	@java.lang.Override
	public java.util.List<IMendixObject> executeAction() throws Exception
	{
		// BEGIN USER CODE
		if(!Utils.IsStringValid(text)) {
			return null;
		}
		
		var context = this.getContext();
		var service = ServiceLocator.INSTANCE.getInstance(this.getContext());
		if(!Utils.IsStringValid(languageCode)) {
			languageCode = Utils.getDefaultLangauge(context);
		}
		service.open();
		var req = new Request(text, languageCode);
		var result = service.detectPiiEntities(req).get();
		service.close();
		var list = new ArrayList<IMendixObject>();
		for(var item : result) {
			list.add(getEntity(context, item));
		}
		return list;
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "_DetectPiiEntitiesAction";
	}

	// BEGIN EXTRA CODE
	private IMendixObject getEntity(IContext context, PiiEntity item) throws CoreException {
		var result = new textanalytics.proxies.PiiEntity(context);
		result.setEntityType(getEntityType(item.type));
		result.setText(item.text);
		result.setBeginOffset(item.beginOffset);
		result.setEndOffset(item.endOffset);
		result.setConfidenceScore(BigDecimal.valueOf(item.confidenceScore));
		result.commit(context);
		return result.getMendixObject();
	}
	
	private textanalytics.proxies.PiiEntityType getEntityType(PiiEntityType entityType) {
		switch(entityType) {
			case BANK_ACCOUNT_NUMBER:
				return textanalytics.proxies.PiiEntityType.Bank_Account_Number;
			case BANK_ROUTING:
				return textanalytics.proxies.PiiEntityType.Bank_Routing;
			case CREDIT_DEBIT_NUMBER:
				return textanalytics.proxies.PiiEntityType.Credit_Debit_Number;
			case CREDIT_DEBIT_CVV:
				return textanalytics.proxies.PiiEntityType.Credit_Debit_CVV;
			case CREDIT_DEBIT_EXPIRY:
				return textanalytics.proxies.PiiEntityType.Credit_Debit_Expiry;
			case PIN:
				return textanalytics.proxies.PiiEntityType.Pin;
			case EMAIL:
				return textanalytics.proxies.PiiEntityType.Email;
			case ADDRESS:
				return textanalytics.proxies.PiiEntityType.Address;
			case NAME:
				return textanalytics.proxies.PiiEntityType.Name;
			case PHONE:
				return textanalytics.proxies.PiiEntityType.Phone;
			case SSN:
				return textanalytics.proxies.PiiEntityType.SSN;
			case DATE_TIME:
				return textanalytics.proxies.PiiEntityType.Date_Time;
			case PASSPORT_NUMBER:
				return textanalytics.proxies.PiiEntityType.Passport_Number;
			case DRIVER_ID:
				return textanalytics.proxies.PiiEntityType.Driver_Id;
			case URL:
				return textanalytics.proxies.PiiEntityType.URL;
			case AGE:
				return textanalytics.proxies.PiiEntityType.Age;
			case USERNAME:
				return textanalytics.proxies.PiiEntityType.User_Name;
			case PASSWORD:
				return textanalytics.proxies.PiiEntityType.Password;
			case IP_ADDRESS:
				return textanalytics.proxies.PiiEntityType.IP_Address;
			case MAC_ADDRESS:
				return textanalytics.proxies.PiiEntityType.MAC_Address;
			default:
				return textanalytics.proxies.PiiEntityType.All;
		}
	}
	// END EXTRA CODE
}
