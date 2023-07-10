package main.actions;

import com.mendix.cognitiveservices.contracts.security.ICredentialsService;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.ISession;

public class ServiceLocator {
	
	public static final ServiceLocator INSTANCE = new ServiceLocator();

	private ServiceLocator() {
		com.mendix.cognitiveservices.contracts.ServiceLocator.addModule(new AwsModule(), new AzureModule());
	}
	
	public static void setConfiguration(String key, String value) {
		com.mendix.cognitiveservices.contracts.ServiceLocator.setConfiguration(key, value);
	}

	public ICredentialsService getInstance(String providerName, IContext context) {
		var ctx = new MendixContext(context);
		return com.mendix.cognitiveservices.contracts.ServiceLocator.getInstance(providerName.toLowerCase(), ICredentialsService.class, ctx);
	}
	
	static class MendixContext implements com.mendix.cognitiveservices.contracts.security.IContext {

		private final ISession session;
		
		MendixContext(IContext context) {
			this.session = context.getSession();
		}

		@Override
		public String getAccessToken() {
			return null;
		}

		@Override
		public String getCsrfToken() {
			return this.session.getCsrfToken();
		}
	}

	static class AwsModule extends com.mendix.cognitiveservices.contracts.ServiceLocator.Module {
		private AwsModule() {
			super("aws");
		}

		@Override
		protected void configure() {
			bind(ICredentialsService.class, com.mendix.cognitiveservices.aws.security.CredentialsService.class);
		}
	}

	static class AzureModule extends com.mendix.cognitiveservices.contracts.ServiceLocator.Module {
		private AzureModule() {
			super("azure");
		}

		@Override
		protected void configure() {
			bind(ICredentialsService.class, com.mendix.cognitiveservices.azure.security.CredentialsService.class);
		}
	}
}
