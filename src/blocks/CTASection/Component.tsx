import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CheckCircle, Clock, Users } from 'lucide-react'
import Link from 'next/link'

type CTASectionProps = {
  heading?: string
  subheading?: string
  description?: string
  primaryCta?: {
    text?: string
    link?: string
  }
  secondaryCta?: {
    text?: string
    link?: string
  }
  background?: 'primary' | 'gradient' | 'dark' | 'light'
  size?: 'large' | 'medium' | 'small'
}

export const CTASectionBlock: React.FC<CTASectionProps> = ({
  heading = 'Ready to Transform Your Business?',
  subheading = 'Join hundreds of organizations that have streamlined their operations and achieved measurable results with Nexus.',
  primaryCta = { text: 'Book Your Free Consultation', link: '/book-consultation' },
}) => {
  return (
    <section className="py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {heading}
              </h2>
              <p className="text-xl leading-relaxed">{subheading}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Free Consultation</h4>
                  <p className="text-sm">No commitment required</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Quick Assessment</h4>
                  <p className="text-sm">30-minute discovery call</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Expert Guidance</h4>
                  <p className="text-sm">Tailored recommendations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Clear Roadmap</h4>
                  <p className="text-sm">Actionable next steps</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-primary text-primary-foreground shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold mb-4">Schedule Your Consultation</CardTitle>
              <p className="text-lg text-white leading-relaxed">
                Take the first step toward operational excellence. Our experts are ready to help you
                identify opportunities and create a customized transformation plan.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button
                size="lg"
                variant="secondary"
                className="w-full text-lg py-4 font-semibold"
                asChild
              >
                <Link
                  href={primaryCta?.link || '/book-consultation'}
                  className="flex items-center justify-center gap-2"
                >
                  {primaryCta?.text || 'Book Your Free Consultation'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <div className="text-center pt-4 border-t border-primary-foreground/20">
                <p className="font-semibold text-white mb-3">What happens next?</p>
                <div className="space-y-2 text-sm text-white opacity-90">
                  <p className="text-white">✓ 30-minute discovery call</p>
                  <p className="text-white">✓ Operational assessment</p>
                  <p className="text-white">✓ Customized recommendations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
