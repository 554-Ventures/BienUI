/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Radio, RadioGroup } from '../components/Forms/Radio'
import { Card } from '../components/Display/Card'
import { Text } from '../components/Display/Text'
import { Button } from '../components/Interactive/Button'

const meta: Meta<typeof Radio> = {
  title: 'Forms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Radio button component for single-choice selections. Can be used individually or grouped together for mutually exclusive options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the radio button',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the radio button is checked',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio button is disabled',
    },
    name: {
      control: 'text',
      description: 'Name attribute for grouping radio buttons',
    },
    value: {
      control: 'text',
      description: 'Value of the radio button',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function when selection changes',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card style={{ minWidth: '250px' }}>
      <Radio {...args} />
    </Card>
  ),
  args: {
    label: 'Option 1',
    name: 'example',
    value: 'option1',
  },
}

export const Checked: Story = {
  render: (args) => (
    <Card style={{ minWidth: '250px' }}>
      <Radio {...args} />
    </Card>
  ),
  args: {
    label: 'Selected option',
    name: 'example',
    value: 'selected',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  render: (args) => (
    <Card style={{ minWidth: '250px' }}>
      <Radio {...args} />
    </Card>
  ),
  args: {
    label: 'Disabled option',
    name: 'example',
    value: 'disabled',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  render: (args) => (
    <Card style={{ minWidth: '250px' }}>
      <Radio {...args} />
    </Card>
  ),
  args: {
    label: 'Disabled & checked',
    name: 'example',
    value: 'disabled-checked',
    disabled: true,
    defaultChecked: true,
  },
}

export const BasicRadioGroup: Story = {
  render: () => {
    const [selectedSize, setSelectedSize] = useState('medium')

    return (
      <Card style={{ minWidth: '300px' }}>
        <RadioGroup label="T-Shirt Size" hint="Choose your preferred size">
          <Radio
            label="Small"
            name="size"
            value="small"
            checked={selectedSize === 'small'}
            onChange={() => setSelectedSize('small')}
          />
          <Radio
            label="Medium"
            name="size"
            value="medium"
            checked={selectedSize === 'medium'}
            onChange={() => setSelectedSize('medium')}
          />
          <Radio
            label="Large"
            name="size"
            value="large"
            checked={selectedSize === 'large'}
            onChange={() => setSelectedSize('large')}
          />
          <Radio
            label="Extra Large"
            name="size"
            value="xl"
            checked={selectedSize === 'xl'}
            onChange={() => setSelectedSize('xl')}
          />
        </RadioGroup>
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const PaymentMethod: Story = {
  render: () => {
    const [paymentMethod, setPaymentMethod] = useState('card')

    return (
      <Card style={{ minWidth: '400px' }}>
        <Text size="lg" weight="semibold" style={{ margin: '0 0 16px 0' }}>
          Payment Method
        </Text>
        <RadioGroup hint="Select your preferred payment option">
          <Radio
            label="Credit/Debit Card"
            name="payment"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={() => setPaymentMethod('card')}
          />
          <Radio
            label="PayPal"
            name="payment"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
          />
          <Radio
            label="Apple Pay"
            name="payment"
            value="apple"
            checked={paymentMethod === 'apple'}
            onChange={() => setPaymentMethod('apple')}
          />
          <Radio
            label="Google Pay"
            name="payment"
            value="google"
            checked={paymentMethod === 'google'}
            onChange={() => setPaymentMethod('google')}
          />
          <Radio
            label="Bank Transfer"
            name="payment"
            value="bank"
            checked={paymentMethod === 'bank'}
            onChange={() => setPaymentMethod('bank')}
            disabled
          />
        </RadioGroup>
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const DeliveryOptions: Story = {
  render: () => {
    const [delivery, setDelivery] = useState('standard')

    const getDeliveryInfo = (option: string) => {
      const info = {
        express: { time: '1-2 days', price: '$15.99' },
        standard: { time: '3-5 days', price: '$5.99' },
        economy: { time: '7-10 days', price: 'Free' },
        pickup: { time: 'Same day', price: 'Free' },
      }
      return info[option as keyof typeof info]
    }

    return (
      <Card style={{ minWidth: '450px' }}>
        <Text size="lg" weight="semibold" style={{ margin: '0 0 8px 0' }}>
          Delivery Options
        </Text>
        <Text
          size="sm"
          style={{ margin: '0 0 16px 0', color: 'var(--color-text-secondary)' }}
        >
          Choose your preferred delivery method
        </Text>

        <RadioGroup>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Radio
              label="Express Delivery"
              name="delivery"
              value="express"
              checked={delivery === 'express'}
              onChange={() => setDelivery('express')}
            />
            <div style={{ textAlign: 'right' }}>
              <Text size="sm" weight="medium">
                $15.99
              </Text>
              <Text size="xs" style={{ color: 'var(--color-text-secondary)' }}>
                1-2 days
              </Text>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Radio
              label="Standard Delivery"
              name="delivery"
              value="standard"
              checked={delivery === 'standard'}
              onChange={() => setDelivery('standard')}
            />
            <div style={{ textAlign: 'right' }}>
              <Text size="sm" weight="medium">
                $5.99
              </Text>
              <Text size="xs" style={{ color: 'var(--color-text-secondary)' }}>
                3-5 days
              </Text>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Radio
              label="Economy Delivery"
              name="delivery"
              value="economy"
              checked={delivery === 'economy'}
              onChange={() => setDelivery('economy')}
            />
            <div style={{ textAlign: 'right' }}>
              <Text
                size="sm"
                weight="medium"
                style={{ color: 'var(--color-success-base)' }}
              >
                Free
              </Text>
              <Text size="xs" style={{ color: 'var(--color-text-secondary)' }}>
                7-10 days
              </Text>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Radio
              label="Store Pickup"
              name="delivery"
              value="pickup"
              checked={delivery === 'pickup'}
              onChange={() => setDelivery('pickup')}
            />
            <div style={{ textAlign: 'right' }}>
              <Text
                size="sm"
                weight="medium"
                style={{ color: 'var(--color-success-base)' }}
              >
                Free
              </Text>
              <Text size="xs" style={{ color: 'var(--color-text-secondary)' }}>
                Same day
              </Text>
            </div>
          </div>
        </RadioGroup>

        {delivery && (
          <Card
            style={{
              marginTop: '16px',
              padding: '12px',
              backgroundColor: 'var(--color-brand-subtle)',
            }}
          >
            <Text
              size="sm"
              weight="medium"
              style={{ color: 'var(--color-brand-base)' }}
            >
              Selected: {delivery.charAt(0).toUpperCase() + delivery.slice(1)}{' '}
              Delivery
            </Text>
            <Text
              size="xs"
              style={{ marginTop: '4px', color: 'var(--color-brand-base)' }}
            >
              {getDeliveryInfo(delivery)?.time} •{' '}
              {getDeliveryInfo(delivery)?.price}
            </Text>
          </Card>
        )}
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}

export const SurveyForm: Story = {
  render: () => {
    const [responses, setResponses] = useState({
      experience: '',
      frequency: '',
      recommend: '',
    })

    const handleResponseChange = (
      category: keyof typeof responses,
      value: string
    ) => {
      setResponses((prev) => ({ ...prev, [category]: value }))
    }

    const isComplete = Object.values(responses).every(
      (response) => response !== ''
    )

    const resetForm = () => {
      setResponses({
        experience: '',
        frequency: '',
        recommend: '',
      })
    }

    return (
      <Card style={{ minWidth: '500px' }}>
        <Text size="lg" weight="semibold" style={{ margin: '0 0 8px 0' }}>
          User Experience Survey
        </Text>
        <Text
          size="sm"
          style={{ margin: '0 0 24px 0', color: 'var(--color-text-secondary)' }}
        >
          Help us improve by sharing your feedback
        </Text>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <RadioGroup
            label="How would you rate your overall experience?"
            hint="Select the option that best describes your experience"
          >
            <Radio
              label="Excellent - Exceeded expectations"
              name="experience"
              value="excellent"
              checked={responses.experience === 'excellent'}
              onChange={() => handleResponseChange('experience', 'excellent')}
            />
            <Radio
              label="Good - Met expectations"
              name="experience"
              value="good"
              checked={responses.experience === 'good'}
              onChange={() => handleResponseChange('experience', 'good')}
            />
            <Radio
              label="Fair - Below expectations"
              name="experience"
              value="fair"
              checked={responses.experience === 'fair'}
              onChange={() => handleResponseChange('experience', 'fair')}
            />
            <Radio
              label="Poor - Well below expectations"
              name="experience"
              value="poor"
              checked={responses.experience === 'poor'}
              onChange={() => handleResponseChange('experience', 'poor')}
            />
          </RadioGroup>

          <RadioGroup
            label="How often do you use our product?"
            hint="Select your usage frequency"
          >
            <Radio
              label="Daily"
              name="frequency"
              value="daily"
              checked={responses.frequency === 'daily'}
              onChange={() => handleResponseChange('frequency', 'daily')}
            />
            <Radio
              label="Weekly"
              name="frequency"
              value="weekly"
              checked={responses.frequency === 'weekly'}
              onChange={() => handleResponseChange('frequency', 'weekly')}
            />
            <Radio
              label="Monthly"
              name="frequency"
              value="monthly"
              checked={responses.frequency === 'monthly'}
              onChange={() => handleResponseChange('frequency', 'monthly')}
            />
            <Radio
              label="Rarely"
              name="frequency"
              value="rarely"
              checked={responses.frequency === 'rarely'}
              onChange={() => handleResponseChange('frequency', 'rarely')}
            />
          </RadioGroup>

          <RadioGroup label="Would you recommend us to others?">
            <Radio
              label="Definitely"
              name="recommend"
              value="definitely"
              checked={responses.recommend === 'definitely'}
              onChange={() => handleResponseChange('recommend', 'definitely')}
            />
            <Radio
              label="Probably"
              name="recommend"
              value="probably"
              checked={responses.recommend === 'probably'}
              onChange={() => handleResponseChange('recommend', 'probably')}
            />
            <Radio
              label="Not sure"
              name="recommend"
              value="unsure"
              checked={responses.recommend === 'unsure'}
              onChange={() => handleResponseChange('recommend', 'unsure')}
            />
            <Radio
              label="Probably not"
              name="recommend"
              value="probably-not"
              checked={responses.recommend === 'probably-not'}
              onChange={() => handleResponseChange('recommend', 'probably-not')}
            />
            <Radio
              label="Definitely not"
              name="recommend"
              value="definitely-not"
              checked={responses.recommend === 'definitely-not'}
              onChange={() =>
                handleResponseChange('recommend', 'definitely-not')
              }
            />
          </RadioGroup>
        </div>

        <div
          style={{
            marginTop: '24px',
            paddingTop: '16px',
            borderTop: '1px solid var(--color-border-base)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Button variant="ghost" size="sm" onClick={resetForm}>
            Clear responses
          </Button>

          <Button
            variant={isComplete ? 'primary' : 'secondary'}
            size="sm"
            disabled={!isComplete}
          >
            Submit Survey
          </Button>
        </div>

        {isComplete && (
          <Card
            style={{
              marginTop: '16px',
              padding: '12px',
              backgroundColor: 'var(--color-success-100)',
            }}
          >
            <Text
              size="sm"
              weight="medium"
              style={{ color: 'var(--color-success-700)' }}
            >
              ✓ All questions completed
            </Text>
            <Text
              size="xs"
              style={{ marginTop: '4px', color: 'var(--color-success-600)' }}
            >
              Ready to submit your feedback
            </Text>
          </Card>
        )}
      </Card>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
