import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileInfoFilled = (props: IIcon) => {

  return (
    <Icon
      name='MobileInfoFilled'

      short_name='MobileInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-300h80v-220h-80v220Zm40-300q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600ZM200-40v-880h560v204h40v192h-40v484H200Z"/>
    </Icon>
  );
};

IconMaterialMobileInfoFilled.displayName = 'OnesyIconMaterialMobileInfoFilled';

export default IconMaterialMobileInfoFilled;
