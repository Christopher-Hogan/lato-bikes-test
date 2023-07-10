package textanalytics.actions;

import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;

public class Utils {
	public static String getDefaultLangauge(IContext context) {
		var defaultLangCode = Core.getLanguage(context).getCode();
		var idx = defaultLangCode.indexOf("_");
		if(idx > 0) {
			defaultLangCode = defaultLangCode.substring(0, idx);
		}
		return defaultLangCode;
	}
	
	public static boolean IsStringValid(String value) {
		return value != null && !value.isBlank() && !value.isEmpty();
	}
}
