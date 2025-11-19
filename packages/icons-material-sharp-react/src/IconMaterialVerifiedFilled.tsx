import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerifiedFilled = (props: IIcon) => {

  return (
    <Icon
      name='VerifiedFilled'

      short_name='Verified'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z"/>
    </Icon>
  );
};

IconMaterialVerifiedFilled.displayName = 'OnesyIconMaterialVerifiedFilled';

export default IconMaterialVerifiedFilled;
