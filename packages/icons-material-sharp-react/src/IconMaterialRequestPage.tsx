import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRequestPage = (props: IIcon) => {

  return (
    <Icon
      name='RequestPage'

      short_name='RequestPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-240h80v-40h80v-200H440v-40h160v-80h-80v-40h-80v40h-80v200h160v40H360v80h80v40ZM160-80v-800h400l240 240v560H160Zm80-80h480v-446L526-800H240v640Zm0 0v-640 640Z"/>
    </Icon>
  );
};

IconMaterialRequestPage.displayName = 'OnesyIconMaterialRequestPage';

export default IconMaterialRequestPage;
