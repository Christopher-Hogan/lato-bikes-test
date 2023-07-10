package textanalytics.actions;

import com.mendix.cognitiveservices.contracts.SingleServiceLocator;
import com.mendix.cognitiveservices.contracts.textanalytics.ITextAnalyticsService;
import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.ISession;

public class ServiceLocator {
	
	public static final ServiceLocator INSTANCE = new ServiceLocator();
	
	private final SingleServiceLocator<ITextAnalyticsService> singleServiceLocator = new SingleServiceLocator<>(ITextAnalyticsService.class);
	
	private ServiceLocator() {
		com.mendix.cognitiveservices.contracts.ServiceLocator.setMissingConfiguration("TokenEndpoint", textanalytics.proxies.constants.Constants.getTokenEndpoint());
	}

	public ITextAnalyticsService getInstance(IContext context) {
		var ctx = new MendixContext(context);
		return singleServiceLocator.getInstance(ctx);
	}
	
	static class MendixContext implements com.mendix.cognitiveservices.contracts.security.IContext {

		private final ISession session;
		private final IContext context;
		private final boolean isDevMode;
		
		MendixContext(IContext context) {
			this.context = context;
			this.session = context.getSession();
			this.isDevMode = Core.getConfiguration().isInDevelopment();
		}

		@Override
		public String getAccessToken() {
			if (this.context.getSystemConfiguration().getApplicationRootUrl().contains("localhost"))
				if (this.isDevMode) {
					return null;
				}
			var token = mendixsso.proxies.microflows.Microflows.sUB_GetAccessTokenAndEnsureNotExpiresSoon(context);
			return token != null ? token.getValue() : null;
		}

		@Override
		public String getCsrfToken() {
			return this.session.getCsrfToken();
		}
	}
}
