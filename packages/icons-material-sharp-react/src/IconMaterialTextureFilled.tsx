import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextureFilled = (props: IIcon) => {

  return (
    <Icon
      name='TextureFilled'

      short_name='Texture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M123-123v-56l658-658h57v56L179-123h-56Zm-3-249v-112l356-356h112L120-372Zm0-308v-160h160L120-680Zm560 560 160-160v160H680Zm-308 0 468-468v112L484-120H372Z"/>
    </Icon>
  );
};

IconMaterialTextureFilled.displayName = 'OnesyIconMaterialTextureFilled';

export default IconMaterialTextureFilled;
