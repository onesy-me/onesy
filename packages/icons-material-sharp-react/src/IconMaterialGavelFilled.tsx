import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGavelFilled = (props: IIcon) => {

  return (
    <Icon
      name='GavelFilled'

      short_name='Gavel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z"/>
    </Icon>
  );
};

IconMaterialGavelFilled.displayName = 'OnesyIconMaterialGavelFilled';

export default IconMaterialGavelFilled;
