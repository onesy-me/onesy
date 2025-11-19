import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRequestQuoteFilled = (props: IIcon) => {

  return (
    <Icon
      name='RequestQuoteFilled'

      short_name='RequestQuote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-200h80v-40h80v-200H440v-40h160v-80h-80v-40h-80v40h-80v200h160v40H360v80h80v40ZM160-80v-800h440l200 200v600H160Zm80-80h480v-480H560v-160H240v640Zm0-640h320v160h160L560-800v160h160v480H240v-640Z"/>
    </Icon>
  );
};

IconMaterialRequestQuoteFilled.displayName = 'OnesyIconMaterialRequestQuoteFilled';

export default IconMaterialRequestQuoteFilled;
