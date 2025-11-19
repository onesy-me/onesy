import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageAspectRatioW100 = (props: IIcon) => {

  return (
    <Icon
      name='ImageAspectRatioW100'

      short_name='ImageAspectRatio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M250-480h60v-60h-60v60Zm150 0h60v-60h-60v60Zm150 150h60v-60h-60v60Zm0-150h60v-60h-60v60ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialImageAspectRatioW100.displayName = 'OnesyIconMaterialImageAspectRatioW100';

export default IconMaterialImageAspectRatioW100;
