import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSweepW100 = (props: IIcon) => {

  return (
    <Icon
      name='SweepW100'

      short_name='Sweep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-266v-28h188v28H426Zm-184-10L52-466l20-20 170 170 366-366 20 20-386 386Zm344-150v-28h188v28H586Zm160-160v-28h188v28H746Z"/>
    </Icon>
  );
};

IconMaterialSweepW100.displayName = 'OnesyIconMaterialSweepW100';

export default IconMaterialSweepW100;
