import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToastW100 = (props: IIcon) => {

  return (
    <Icon
      name='ToastW100'

      short_name='Toast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-266h428v-28H266v28Zm-94 94v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialToastW100.displayName = 'OnesyIconMaterialToastW100';

export default IconMaterialToastW100;
